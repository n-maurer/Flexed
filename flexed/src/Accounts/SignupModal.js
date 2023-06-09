import React, { useState } from "react";
import { useSignupMutation } from "./AuthApi";
import "./accounts.css";

function SignupModal() {
    const [account, setAccount] = useState({
        email: "",
        password: "",
        username: "",
        confirm_password: "",
    });
    const [createAccount, result] = useSignupMutation();

    const handleChange = (event) => {
        setAccount({ ...account, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (account.confirm_password === account.password) {
            createAccount({
                email: account.email,
                username: account.username,
                password: account.password,
            });
        } else {
            console.log("Passwords do not match");
        }
    };
    if (result.isError) {
        console.log("error");
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#signup">
                Signup
            </button>
            <div
                className="modal fade"
                id="signup"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel">
                                Signup
                            </h1>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        onChange={handleChange}
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={account.email}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="email">
                                        Email
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        onChange={handleChange}
                                        className="form-control"
                                        type="text"
                                        name="username"
                                        id="signupUsername"
                                        placeholder="Username"
                                        value={account.username}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="username">
                                        Username
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        onChange={handleChange}
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        id="signupPassword"
                                        placeholder="password"
                                        value={account.password}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="password">
                                        Password
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        onChange={handleChange}
                                        className="form-control"
                                        type="password"
                                        name="confirm_password"
                                        id="confirm_password"
                                        placeholder="confirm_password"
                                        value={account.confirm_password}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="password">
                                        Confirm Password
                                    </label>
                                </div>
                                {account.password ===
                                account.confirm_password ? (
                                    <></>
                                ) : (
                                    <>
                                        <div className="noMatch">
                                            Passwords do not match
                                        </div>
                                    </>
                                )}
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="form-button-close"
                                        data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    {account.password ===
                                    account.confirm_password ? (
                                        <>
                                            <button
                                                type="submit"
                                                data-bs-dismiss="modal"
                                                className="form-button-action">
                                                Signup
                                            </button>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignupModal;
