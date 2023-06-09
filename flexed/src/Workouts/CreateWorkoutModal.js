import { Navigate } from "react-router-dom";
import { useCreateWorkoutMutation } from "./WorkoutApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetTokenQuery } from "../Accounts/AuthApi";

function WorkoutModal() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [createWorkout, result] = useCreateWorkoutMutation();
    const [workout, setWorkout] = useState({
        name: "",
    });
    const {
        data: tokenData,
        error: tokenError,
        isLoading: tokenIsLoading,
    } = useGetTokenQuery();

    const handleChange = (event) => {
        setWorkout({
            ...workout,
            [event.target.name]: event.target.value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        createWorkout({
            name: workout.name,
            account_id: tokenData.account["id"],
        });
        setWorkout({
            name: "",
        });
    }
    if (result.isError) {
        console.log("error");
    }

    return (
        <>
            <button
                type="button"
                className="circular-button"
                data-bs-toggle="modal"
                data-bs-target="#createWo">
                Create a Workout
            </button>
            <div
                className="modal fade"
                id="createWo"
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
                                Create Workout
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
                                        Workout Name:
                                    </label>
                                    <input
                                        value={workout.name}
                                        name="name"
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="form-button-close"
                                        data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        data-bs-dismiss="modal"
                                        className="form-button-action">
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
export default WorkoutModal;
