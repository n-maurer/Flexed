import { Navigate } from "react-router-dom";
import { useCreateMuscleGroupMutation } from "./muscleGroupApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MGModal() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [createMuscleGroup, result] = useCreateMuscleGroupMutation;

    async function handleSubmit(e) {
        e.preventDefault();
        createMuscleGroup("PUT REAL DATA IN, LIKE NAME, ETC");
    }
    if (result.isSuccess) {
        navigate("/muscle-groups");
    } else if (result.isError) {
        setError(result.error);
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                Add Muscle Group
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
                                Create Muscle Group
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit()}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="recipient-name"
                                        className="col-form-label">
                                        Muscle Group Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label
                                        className="input-group-text"
                                        htmlFor="inputGroupSelect01">
                                        Options
                                    </label>
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01">
                                        <option value>Choose Account ID</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Understood
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MGModal;
