from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.exercises import ExerciseRepository, ExerciseIn, ExerciseOut, ExerciseOutAll

router = APIRouter()

@router.post("/exercises", response_model=ExerciseIn)
def create_exercise(
    exercise: ExerciseIn,
    response: Response,
    repo: ExerciseRepository = Depends(),
):
    return repo.create(exercise)


@router.get("/exercises/all", response_model=ExerciseOutAll)
def get_all_exercises(
    repo: ExerciseRepository = Depends()
):
    return {"exercises": repo.get_all()}


@router.delete("/exercises/{exercise_id}", response_model=bool)
def delete_exercise(
    exercise_id: int,
    repo: ExerciseRepository = Depends(),
) -> bool:
    return repo.delete(exercise_id)


@router.put("/exercises/{exercise_id}", response_model=Union[bool, ExerciseOut])
def update_muscle_group(
    exercise_id: int,
    exercise: ExerciseIn,
    repo: ExerciseRepository = Depends(),
) -> Union[bool, ExerciseOut]:
    return repo.update(exercise_id, exercise)
