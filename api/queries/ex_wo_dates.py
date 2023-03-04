from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool


class Error(BaseModel):
    message: str

#Exercise Workout Date (ExWoDate)
class ExWoDateIn(BaseModel):
    workout_id: int
    wo_date: date
    exercise_id: int
    account_id: int
    status: str
    weight_done: Optional[str]
    duration_done: Optional[str]


class ExWoDateOut(ExWoDateIn):
    id: int


class EWDOutAll(BaseModel):
    ewd_tables: List



class EWDRepository:
    def create(self, ewd: ExWoDateIn) :
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    ewd.workout_id,
                    ewd.wo_date,
                    ewd.exercise_id,
                    ewd.account_id,
                    ewd.status,
                    ewd.weight_done,
                    ewd.duration_done,
                ]
                cur.execute(
                    """
                    INSERT INTO ex_wo_dates(
                            workout_id,
                            wo_date,
                            exercise_id,
                            account_id,
                            status,
                            weight_done,
                            duration_done
                        )
                    VALUES (%s, %s, %s, %s, %s, %s, %s)
                    RETURNING id, workout_id, wo_date, exercise_id, account_id, status, weight_done, duration_done
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

    def update(self, ewd_id: int, ewd: ExWoDateIn) -> Union[bool, ExWoDateOut]:
           with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    ewd.workout_id,
                    ewd.wo_date,
                    ewd.exercise_id,
                    ewd.account_id,
                    ewd.status,
                    ewd.weight_done,
                    ewd.duration_done,
                    ewd.reps,
                    ewd.sets,
                    ewd.duration,
                    ewd_id
                ]
                cur.execute(
                    """
                    UPDATE ex_wo_dates
                    SET workout_id = %s,
                            wo_date = %s,
                            exercise_id = %s,
                            account_id = %s,
                            status = %s,
                            weight_done = %s,
                            duration_done = %s
                    WHERE id = %s
                    RETURNING id, workout_id, wo_date, exercise_id, account_id, status, weight_done, duration_done
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


    def get_all(self) -> EWDOutAll:
         with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT ewd.id AS id, ewd.workout_id AS ewd_id, w.name AS workout_name,
                                         ewd.wo_date AS wo_date,
                                         ewd.exercise_id AS exercise_id, ewd.account_id,
                                         e.name AS exercise_name, ewd.status AS status,
                                         ewd.weight_done AS weight_done, e.reps AS reps,
                                         e.sets AS sets, e.duration AS duration
                    FROM ex_wo_dates AS ewd
                    RIGHT JOIN workouts AS w
                        ON (ewd.workout_id = w.id)
                    RIGHT JOIN exercises AS e
                        ON (ewd.exercise_id = e.id)
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results


    def get_exercises_by_workout_id(self, wd_id: int):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    wd_id
                ]
                cur.execute(
                    """
                    SELECT ewd.id AS id, ewd.workout_id AS ewd_id, w.name AS workout_name, ewd.wo_date_id AS wo_date_id, wd.wo_date AS wo_date, ewd.exercise_id AS exercise_id, ewd.account_id, e.name AS exercise_name, ewd.status AS status, ewd.weight_done AS weight_done, ewd.duration_done AS duration_done, ewd.reps AS reps, ewd.sets AS sets, ewd.duration AS duration
                    FROM ex_wo_dates AS ewd
                    RIGHT JOIN workouts AS w
                        ON (ewd.workout_id = w.id)
                    RIGHT JOIN exercises AS e
                        ON (ewd.exercise_id = e.id)
                    RIGHT JOIN workouts_date AS wd
                        ON (ewd.wo_date_id = wd.id)
                    WHERE wo_date_id = %s
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


    def delete(self, ewd_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM ex_wo_dates
                        WHERE id = %s
                        """,
                        [ewd_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False
