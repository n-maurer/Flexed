from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool

class Error(BaseModel):
    message: str

class MuscleGroupIn(BaseModel):
    name: str


class MuscleGroupOut(BaseModel):
    id: int
    name: str


class MuscleGroupsAll(BaseModel):
    muscle_groups: List


class MuscleGroupRepository:
    def create(self, muscle_group: MuscleGroupIn) -> MuscleGroupOut:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO muscle_groups
                            (name)
                        VALUES
                            (%s)
                        RETURNING ID;
                        """,
                        [muscle_group.name]
                    )
                    id = result.fetchone()[0]
                    return self.mg_in_to_out(id, muscle_group)
        except Exception:
            return{"message": "Create Muscle Group did not work"}



    def get_all(self) -> MuscleGroupsAll:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, name
                        FROM muscle_groups
                        ORDER BY id;
                        """
                    )
                    return[
                        self.record_to_mg_out(record)
                        for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all muscle groups"}

    def delete(self, muscle_group_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM muscle_groups
                        WHERE id = %s
                        """,
                        [muscle_group_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def update(self, muscle_group_id: int, muscle_group: MuscleGroupIn) -> Union[bool, MuscleGroupOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE muscle_groups
                        SET name = %s
                        WHERE id = %s
                        """,
                        [
                            muscle_group.name,
                            muscle_group_id
                        ]
                    )
                    return self.mg_in_to_out(muscle_group_id, muscle_group)
                    # return True
        except Exception as e:
            print(e)
            return {"message": "Could not update muscle group"}


    def mg_in_to_out(self, id: int, muscle_group: MuscleGroupIn):
        old_data = muscle_group.dict()
        return MuscleGroupOut(id=id, **old_data)

    def record_to_mg_out(self, record):
        return MuscleGroupOut(
            id=record[0],
            name=record[1],
        )
