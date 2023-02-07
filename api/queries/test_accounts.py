from pydantic import BaseModel
from typing import List, Optional, Union
from datetime import date
from queries.pool import pool


class Error(BaseModel):
    message: str


class Account(BaseModel):
    id: int
    email: str
    hashed_password: str
    username: str
    first_name: str
    last_name: Optional[str]
    height: Optional[str]
    weight: Optional[str]
    age: Optional[str]


class AccountIn(BaseModel):
    email: str
    password: str
    username: str
    first_name: str
    last_name: Optional[str]
    height: Optional[str]
    weight: Optional[str]
    age: Optional[str]


class AccountOut(BaseModel):
    id: int
    email: str
    hashed_password: str
    username: str
    first_name: str
    last_name: Optional[str]
    height: Optional[str]
    weight: Optional[str]
    age: Optional[str]


class AccountsOutAll(BaseModel):
    accounts: List



class AccountsRepository:
    # def create(self, account: AccountIn, hashed_password: str) :
    #     with pool.connection() as conn:
    #         with conn.cursor() as cur:
    #             params = [
    #                 account.email,
    #                 hashed_password=has,
    #                 account.username,
    #                 account.first_name,
    #                 account.last_name,
    #                 account.height,
    #                 account.weight,
    #                 account.age
    #             ]
    #             cur.execute(
    #                 """
    #                 INSERT INTO accounts(
    #                             email,
    #                             hashed_password,
    #                             username,
    #                             first_name,
    #                             last_name,
    #                             height,
    #                             weight,
    #                             age
    #                     )
    #                 VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    #                 RETURNING id, email, hashed_password, username, first_name, last_name, height, weight, age
    #                 """,
    #                 params,
    #             )

    #             record = None
    #             row = cur.fetchone()
    #             if row is not None:
    #                 record = {}
    #                 for i, column in enumerate(cur.description):
    #                     record[column.name] = row[i]

    #             return record

    def create(
        self, account: AccountIn, hashed_password: str
    ) -> AccountOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO accounts (email, hashed_password, username, first_name, last_name, height, weight, age)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [account.email, hashed_password, account.username, account.first_name, account.last_name, account.height, account.weight, account.age],
                )
                id = result.fetchone()[0]
                return AccountOut(
                    id=id,
                    email=account.email,
                    hashed_password=hashed_password,
                    username=account.username,
                    first_name=account.first_name,
                    last_name=account.last_name,
                    height=account.height,
                    weight=account.weight,
                    age=account.age
                )


    def get_all(self) -> AccountsOutAll:
         with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, email, username
                    FROM accounts
                    """
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results


    def get_account(self, username: str) -> AccountOut:
         with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id, email, hashed_password, username, first_name, last_name, height, weight, age
                    FROM accounts
                    WHERE username = %s
                    """,
                    [username]
                )

                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)

                return results



    def delete(self, account_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM accounts
                        WHERE id = %s
                        """,
                        [account_id]
                    )
                    return True
        except Exception as e:
            print(e)
            return False


    def update(self, account_id: int, account: AccountIn) -> Union[bool, AccountOut]:
           with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    account.email,
                    account.hashed_password,
                    account.username,
                    account.first_name,
                    account.last_name,
                    account.height,
                    account.weight,
                    account.age,
                    account_id
                ]
                cur.execute(
                    """
                    UPDATE exercises
                    SET email = %s
                        , hashed_password = %s
                        , username = %s
                        , first_name = %s
                        , last_name = %s
                        , height = %s
                        , weight = %s
                        , age = %s
                    WHERE id = %s
                    RETURNING id, email, hashed_password, username, first_name, last_name, height, weight, age
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
