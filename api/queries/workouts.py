from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool


class Error(BaseModel):
    message: str


class WorkoutIn(BaseModel):
    name: str
    account_id: int


class WorkoutOut(WorkoutIn):
    id: int


class WorkoutOutAll(BaseModel):
    workouts: List



class WorkoutsRepository:
    def create(self, workout: WorkoutIn) -> WorkoutOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    workout.name,
                    workout.account_id
                ]
                cur.execute(
                    """
                    INSERT INTO workouts
                        (name, account_id)
                    VALUES (%s, %s)
                    RETURNING id, name, account_id
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


    def get_all(self) -> WorkoutOutAll:
         with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, name, account_id
                    FROM workouts
                    ORDER BY id
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results


    def delete(self, workout_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM workouts
                        WHERE id = %s
                        """,
                        [workout_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False



    def update(self, workout_id: int, workout: WorkoutIn) -> Union[bool, WorkoutOut]:
           with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    workout.name,
                    workout.account_id,
                    workout_id
                ]
                cur.execute(
                    """
                    UPDATE workouts
                    SET name = %s,
                        account_id = %s
                    WHERE id = %s
                    RETURNING id, name, account_id
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


    def get_exercises_by_workout(self, workout_id: int):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    workout_id
                ]
                cur.execute(
                    """
                    SELECT e.name AS exercise, e.id, e.reps, e.sets, e.duration, m.name AS muscle_group
                    FROM workouts_exercises AS we
                    INNER JOIN exercises AS e
                        ON (we.exercise_id = e.id)
                    LEFT JOIN muscle_groups AS m
                        ON (e.muscle_group_id = m.id)
                    WHERE workout_id = %s
                    """,
                    params,
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results


    def get_workout_name_by_id(self, workout_id: int):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT name, account_id
                    FROM workouts
                    WHERE id = %s
                    """,
                    [workout_id]
                )
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]

                return record
