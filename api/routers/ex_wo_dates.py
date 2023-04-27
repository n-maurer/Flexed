from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.ex_wo_dates import (
    EWDOutAll,
    ExWoDateIn,
    ExWoDateOut,
    EWDRepository
)


router = APIRouter()


@router.post("/ex-wo-date")
def create_we_relationship(
    ewd: ExWoDateIn,
    resposne: Response,
    repo: EWDRepository = Depends(),
) -> ExWoDateOut:

    return repo.create(ewd)


@router.get("/ex-wo-date")
def get_all(
    repo: EWDRepository = Depends(),
):
    return {"ewd-tables": repo.get_all()}


@router.delete("/ex-wo-date/{ewd_id}", response_model=bool)
def delete_we_relationship(
    ewd_id: int,
    repo: EWDRepository = Depends(),
) -> bool:
    return repo.delete(ewd_id)


@router.get("/ex-wo-date/{date}/{account_id}")
def get_exercises_by_date(
    date: str,
    account_id:int,
    repo: EWDRepository = Depends(),
):
    # workout_name = repo.get_workout_name_by_id(wd_id)
    return {"table": repo.get_exercises_by_date(date, account_id)}


@router.put("/ex-wo-date/{ewd_id}", response_model=Union[bool, ExWoDateOut])
def update_ewd(
    ewd_id: int,
    ewd: ExWoDateIn,
    repo: EWDRepository = Depends(),
) -> Union[bool, ExWoDateOut]:
    return repo.update(ewd_id, ewd)

@router.get("/ex-wo-date/{account_id}/recent/{ex_id}/weight")
def get_last_weight_by_ex_id(
    ex_id: int,
    account_id:int,
    repo: EWDRepository = Depends()
):
    return repo.get_last_weight_by_ex_id(ex_id,account_id)
