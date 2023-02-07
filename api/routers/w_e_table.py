from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.w_e_table import (
    WEIn,
    WEOut,
    WEOutAll,
    WERepository
)

router = APIRouter()


@router.post("/we-table", response_model=WEIn)
def create_we_relationship(
    we: WEIn,
    resposne: Response,
    repo: WERepository = Depends(),
) -> WEOut:
    return repo.create(we)


@router.get("/we-table")
def get_all(
    repo: WERepository = Depends(),
):
    return {"we-tables": repo.get_all()}


@router.delete("/we-table/{we_id}", response_model=bool)
def delete_we_relationship(
    we_id: int,
    repo: WERepository = Depends(),
) -> bool:
    return repo.delete(we_id)
