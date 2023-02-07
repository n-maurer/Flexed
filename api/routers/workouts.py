from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.workouts import (
    WorkoutOut,
    WorkoutIn,
    WorkoutOutAll,
    WorkoutsRepository
)
from queries.w_e_table import WERepository

router = APIRouter()


@router.post("/workouts", response_model=WorkoutIn)
def create_workout(
    workout: WorkoutIn,
    resposne: Response,
    repo: WorkoutsRepository = Depends(),
) -> WorkoutOut:
    return repo.create(workout)


@router.get("/workouts", response_model=WorkoutOutAll)
def get_all(
    repo: WorkoutsRepository = Depends(),
):
    return {"workouts": repo.get_all()}


@router.delete("/workouts/{workout_id}", response_model=bool)
def delete_workout(
    workout_id: int,
    repo: WorkoutsRepository = Depends(),
) -> bool:
    return repo.delete(workout_id)


@router.put("/workouts/{workout_id}", response_model=Union[bool, WorkoutOut])
def update_workout(
    workout_id: int,
    workout: WorkoutIn,
    repo: WorkoutsRepository = Depends(),
) -> Union[bool, WorkoutOut]:
    return repo.update(workout_id, workout)



@router.get("/workouts/{workout_id}")
def get_exercises_by_workout_id(
    workout_id: int,
    repo: WorkoutsRepository = Depends(),
):
    workout_name = repo.get_workout_name_by_id(workout_id)
    return {workout_name["name"]: repo.get_exercises_by_workout(workout_id)}
