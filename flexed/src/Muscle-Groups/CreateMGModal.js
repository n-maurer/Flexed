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
        setMuscleGroup({ name: "" });
    }
    if (result.isError) {
        console.log("error");
    }

    return (
        <>
            <button
                className="circular-button"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addMg">
                Add Muscle Group
            </button>
            <div
                className="modal fade"
                id="addMg"
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
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal">
                                        Close
                                    </button>
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
