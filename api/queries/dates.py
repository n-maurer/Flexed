from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool


class Error(BaseModel):
    message: str

#Workout Exercise (WE)
class DateWorkoutIn(BaseModel):
    workout_id: int
    account_id: int
    wo_date: date


class DateWorkoutOut(DateWorkoutIn):
    id: int


class DateWorkoutOutAll(BaseModel):
    dw_tables: List



class DateWorkoutRepository:
    def create(self, wd: DateWorkoutIn) -> DateWorkoutOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    wd.workout_id,
                    wd.account_id,
                    wd.wo_date
                ]
                cur.execute(
                    """
                    INSERT INTO workouts_date
                        (workout_id, account_id, wo_date)
                    VALUES (%s, %s, %s)
                    RETURNING id, workout_id, account_id, wo_date
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


    def get_all(self) -> DateWorkoutOutAll:
         with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT d.id, d.workout_id, d.account_id, w.name, d.wo_date
                    FROM workouts_date AS d
                    LEFT JOIN workouts AS w
                        ON (d.workout_id = w.id)
                    ORDER BY d.id, d.workout_id, d.account_id, w.name, d.wo_date
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def get_workouts_by_account_id(self, id: int) -> DateWorkoutOutAll:
         with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT d.id, d.workout_id, d.account_id, w.name, d.wo_date
                    FROM workouts_date AS d
                    LEFT JOIN workouts AS w
                        ON (d.workout_id = w.id)
                    WHERE (d.account_id = %s)
                    ORDER BY d.id, d.workout_id, d.account_id, w.name, d.wo_date
                    """,
                    [id]
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def get_workouts_by_account_date(self, id: int, date: str) -> DateWorkoutOutAll:
         with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT d.id, d.workout_id, d.account_id, w.name, d.wo_date
                    FROM workouts_date AS d
                    LEFT JOIN workouts AS w
                        ON (d.workout_id = w.id)
                    WHERE (d.account_id = %s AND d.wo_date = %s)
                    ORDER BY d.id, d.workout_id, d.account_id, w.name, d.wo_date
                    """,
                    [id, date]
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results

    def get_by_date(self, date: str) -> DateWorkoutOut:
         with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT d.id, d.workout_id, d.account_id, w.name, d.wo_date
                    FROM workouts_date AS d
                    LEFT JOIN workouts AS w
                        ON (d.workout_id = w.id)
                    WHERE d.wo_date = %s
                    ORDER BY d.id, d.workout_id, d.account_id, w.name, d.wo_date
                    """,
                    [date]
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results


    def delete(self, wd_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM workouts_date
                        WHERE id = %s
                        """,
                        [wd_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False
