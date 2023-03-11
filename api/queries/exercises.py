from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool


class Error(BaseModel):
    message: str


class ExerciseIn(BaseModel):
    account_id: int
    name: str
    muscle_group_id: int
    reps: Optional[str]
    sets: Optional[str]
    duration: Optional[str]


class ExerciseOut(ExerciseIn):
    id: int


class ExerciseOutAll(BaseModel):
    exercises: List


class ExerciseRepository:
    def create(self, exercise: ExerciseIn) -> ExerciseOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    exercise.account_id,
                    exercise.name,
                    exercise.muscle_group_id,
                    exercise.reps,
                    exercise.sets,
                    exercise.duration
                ]
                cur.execute(
                    """
                    INSERT INTO exercises
                        (account_id, name, muscle_group_id, reps, sets, duration)
                    VALUES (%s, %s, %s, %s, %s, %s)
                    RETURNING id, account_id, name, muscle_group_id, reps, sets, duration
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

    def get_all(self) -> ExerciseOutAll:
         with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT e.id, e.account_id, e.name, m.id AS muscle_group_id, m.name AS muscle_group, e.reps, e.sets, e.duration
                    FROM exercises AS e
                    LEFT JOIN muscle_groups AS m
                        ON (e.muscle_group_id = m.id)
                    ORDER BY name;
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def filter_exercises(self, mg_id : int) -> ExerciseOutAll:
         with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT e.id, e.account_id, e.name, m.id AS muscle_group_id, m.name AS muscle_group, e.reps, e.sets, e.duration
                    FROM exercises AS e
                    LEFT JOIN muscle_groups AS m
                        ON (e.muscle_group_id = m.id)
                    WHERE m.id = %s
                    ORDER BY name;
                    """,
                    [mg_id]
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results


    def delete(self, exercise_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM exercises
                        WHERE id = %s
                        """,
                        [exercise_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False


    def update(self, exercise_id: int, exercise: ExerciseIn) -> Union[bool, ExerciseOut]:
           with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    exercise.account_id,
                    exercise.name,
                    exercise.muscle_group_id,
                    exercise.reps,
                    exercise.sets,
                    exercise.duration,
                    exercise_id
                ]
                cur.execute(
                    """
                    UPDATE exercises
                    SET account_id = %s
                        , name = %s
                        , muscle_group_id = %s
                        , reps = %s
                        , sets = %s
                        , duration = %s
                    WHERE id = %s
                    RETURNING id, account_id, name, muscle_group_id, reps, sets, duration
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


    def exercise_in_to_out(self, id: int, exercise: ExerciseIn):
        old_data = exercise.dict()
        return ExerciseOut(id=id, **old_data)

    def record_to_e_out(self, record):
        return ExerciseOut(
            id=record[0],
            name=record[1],
        )
