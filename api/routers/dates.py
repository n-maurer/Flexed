from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.dates import (
    DateWorkoutIn,
    DateWorkoutOut,
    DateWorkoutOutAll,
    DateWorkoutRepository
)

router = APIRouter()


@router.post("/workout-date", response_model=DateWorkoutIn)
def create_we_relationship(
    wd: DateWorkoutIn,
    resposne: Response,
    repo: DateWorkoutRepository = Depends(),
) -> DateWorkoutOut:

    return repo.create(wd)


@router.get("/workout-date")
def get_all(
    repo: DateWorkoutRepository = Depends(),
):
    return {"date_tables": repo.get_all()}

@router.get("/workout-date/{date}")
def get_by_date(
    date: str,
    repo: DateWorkoutRepository = Depends(),
):
    return {"date_tables": repo.get_by_date(date)}

@router.get("/workout-date/users/{account_id}")
def get_workouts_by_account_id(
    account_id: int,
    repo: DateWorkoutRepository = Depends(),
):
    return {"date_tables": repo.get_workouts_by_account_id(account_id)}

@router.get("/workout-date/users/{account_id}/{date}")
def get_workouts_by_account_date(
    account_id: int,
    date: str,
    repo: DateWorkoutRepository = Depends(),
):
    return {"date_tables": repo.get_workouts_by_account_date(account_id, date)}


@router.delete("/workout-date/{wd_id}", response_model=bool)
def delete_workout_date(
    wd_id: int,
    repo: DateWorkoutRepository = Depends(),
) -> bool:
    return repo.delete(wd_id)
