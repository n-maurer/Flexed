from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.muscle_groups import(
    MuscleGroupIn,
    MuscleGroupOut,
    MuscleGroupRepository,
    Error,
    MuscleGroupsAll
)

router = APIRouter()


@router.post("/muscle-groups", response_model=MuscleGroupIn)
def create_muscle_group(
    muscle_group: MuscleGroupIn,
    resposne: Response,
    repo: MuscleGroupRepository = Depends(),
):
    # resposne.status_code = 400
    return repo.create(muscle_group)


@router.get("/muscle-groups", response_model=MuscleGroupsAll)
def get_all(
    repo: MuscleGroupRepository = Depends(),
):
    return {"muscle_groups": repo.get_all()}


@router.delete("/muscle-groups/{muscle_group_id}", response_model=bool)
def delete_muscle_group(
    muscle_group_id: int,
    repo: MuscleGroupRepository = Depends(),
) -> bool:
    return repo.delete(muscle_group_id)


@router.put("/muscle-groups/{muscle_group_id}", response_model=Union[bool, MuscleGroupOut])
def update_muscle_group(
    muscle_group_id: int,
    muscle_group: MuscleGroupIn,
    repo: MuscleGroupRepository = Depends(),
) -> Union[bool, MuscleGroupOut]:
    return repo.update(muscle_group_id, muscle_group)
