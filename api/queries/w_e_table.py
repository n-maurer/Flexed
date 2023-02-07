from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool


class Error(BaseModel):
    message: str

#Workout Exercise (WE)
class WEIn(BaseModel):
    workout_id: int
    exercise_id: int
    account_id: int


class WEOut(WEIn):
    id: int


class WEOutAll(BaseModel):
    we_tables: List



class WERepository:
    def create(self, we: WEIn) -> WEOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    we.workout_id,
                    we.exercise_id,
                    we.account_id
                ]
                cur.execute(
                    """
                    INSERT INTO workouts_exercises
                        (workout_id, exercise_id, account_id)
                    VALUES (%s, %s, %s)
                    RETURNING id, workout_id, exercise_id, account_id
                    """,
                    params,
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]

                return record


    def get_all(self) -> WEOutAll:
         with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, workout_id, exercise_id, account_id
                    FROM workouts_exercises;
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results


    def delete(self, we_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM workouts_exercises
                        WHERE id = %s
                        """,
                        [we_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False
