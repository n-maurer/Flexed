from fastapi import APIRouter, Depends, Response, Request
from typing import List, Optional, Union
from queries.accounts import AccountOut, AccountIn, AccountsOutAll, AccountsRepository
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel
from queries.accounts import Account


router = APIRouter()


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str

@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    response: Response,
    request: Request,
    repo: AccountsRepository = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    account = repo.create(info, hashed_password)
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())



@router.get("/accounts/all", response_model=AccountsOutAll)
def get_all_accounts(
    repo: AccountsRepository = Depends()
):
    return {"accounts": repo.get_all()}


@router.delete("/accounts/{account_id}", response_model=bool)
def delete_account(
    account_id: int,
    repo: AccountsRepository = Depends(),
) -> bool:
    return repo.delete(account_id)


@router.get("/accounts/{account_id}")
def get_account(
    account_id: int,
    repo: AccountsRepository = Depends()
):
    return repo.get_account(account_id)


@router.put("/accounts/{account_id}", response_model=Union[bool, AccountOut])
def update_account(
    account_id: int,
    account: AccountIn,
    repo: AccountsRepository = Depends(),
) -> Union[bool, AccountOut]:
    return repo.update(account_id, account)



@router.get("/api/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: Account = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if authenticator.cookie_name in request.cookies:
        token_data = {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }
        return AccountToken(**token_data)
