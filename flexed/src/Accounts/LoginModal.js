import React, { useState } from "react";
import { useLoginMutation } from "./AuthApi";

function LoginModal() {
    const [show, setShow] = useState(false);
    const [account, setAccount] = useState({
        password: "",
        username: "",
    });
    const [createLoginToken, result] = useLoginMutation();

    const handleChange = (event) => {
        setAccount({ ...account, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let formData = null;
        formData = new FormData();
        formData.append("username", account.username);
        formData.append("password", account.password);
        createLoginToken(formData);
        console.log("success");
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
                data-bs-target="#staticBackdrop">
                Login
            </button>
            <div
                className="modal fade"
                id="staticBackdrop"
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
                                Login
                            </h1>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        onChange={handleChange}
                                        className="form-control"
                                        type="text"
                                        name="username"
                                        id="username"
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
                                        id="password"
                                        placeholder="password"
                                        value={account.password}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="password">
                                        Password
                                    </label>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button className="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginModal;
