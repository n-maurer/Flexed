import { Navigate } from "react-router-dom";
import { useCreateMuscleGroupMutation } from "./muscleGroupApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MGModal() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [createMuscleGroup, result] = useCreateMuscleGroupMutation();
    const [muscleGroup, setMuscleGroup] = useState({
        name: "",
    });

    const handleChange = (event) => {
        setMuscleGroup({
            ...muscleGroup,
            [event.target.name]: event.target.value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        createMuscleGroup({ name: muscleGroup.name });
    }
    if (result.isSuccess) {
        console.log("success");
    } else if (result.isError) {
        console.log("error");
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
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="recipient-name"
                                        className="col-form-label">
                                        Muscle Group Name:
                                    </label>
                                    <input
                                        value={muscleGroup.name}
                                        name="name"
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                {/* <div className="input-group mb-3">
                                    <label
                                        className="input-group-text"
                                        htmlFor="inputGroupSelect01">
                                        Options
                                    </label>
                                    <select
                                        value={muscleGroup.account_id}
                                        name="account_id"
                                        onChange={handleChange}
                                        className="form-select"
                                        id="inputGroupSelect01">
                                        <option value>Choose Account ID</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div> */}
                                <div className="modal-footer">
                                    {/* <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal">
                                        Close
                                    </button> */}
                                    <button
                                        type="submit"
                                        data-bs-dismiss="modal"
                                        className="btn btn-primary">
                                        Create
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
export default MGModal;
