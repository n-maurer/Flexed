from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.exercises import ExerciseRepository, ExerciseIn, ExerciseOut, ExerciseOutAll
import json
import requests
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


@router.get("/exercises/{mg_id}", response_model=ExerciseOutAll)
def filter_exercises(
    mg_id: int,
    repo: ExerciseRepository = Depends()
):
    return {"exercises": repo.filter_exercises(mg_id)}

@router.get("/exercises/{muscle_group}/ideas")
def get_exercise_ideas(
    muscle_group: str
):
    api_key = "U580yuXNnRc4SItKznKaiA==9xN4msRCLUz1jvzb"
    api_url = 'https://api.api-ninjas.com/v1/exercises?muscle={}'.format(muscle)
    response = requests.get(api_url, headers={'X-Api-Key': api_key})
    if response.status_code == requests.codes.ok:
        data = json.loads(response.text)
        for x in data:
            return [x["name"] for x in data]
    else:
        print("Error:", response.status_code, response.text)
