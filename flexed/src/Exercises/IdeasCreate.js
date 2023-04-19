import { Navigate } from "react-router-dom";
import {
    useCreateExerciseMutation,
    useGetExerciseIdeasQuery,
} from "./ExerciseApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetMuscleGroupsQuery } from "../Muscle-Groups/muscleGroupApi";
import { useGetTokenQuery } from "../Accounts/AuthApi";

function IdeasModal() {
    const { data, error, isLoading } = useGetMuscleGroupsQuery();
    const {
        data: tokenData,
        error: tokenError,
        isLoading: tokenIsLoading,
    } = useGetTokenQuery();

    const [ideas, setIdeas] = useState([]);

    const [createExercise, result] = useCreateExerciseMutation();
    const [exercise, setExercise] = useState({
        accountId: tokenData.account["id"],
        name: "",
        muscleGroupId: "",
        reps: "",
        sets: "",
        duration: "",
    });

    async function getIdeas() {
        let mg;
        if (data) {
            for (let x of data["muscle_groups"]) {
                if (x["id"] === parseInt(exercise["muscleGroupId"])) {
                    mg = x["name"];
                }
            }
        }
        await fetch(
            `${process.env.REACT_APP_FLEXED_SERVICE_API_HOST}/exercises/${mg}/ideas`
        )
            .then((response) => response.json())
            .then((data) => {
                setIdeas(data);
            });
    }

    const handleChange = (event) => {
        setExercise({
            ...exercise,
            [event.target.name]: event.target.value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        createExercise({
            account_id: parseInt(exercise.accountId),
            name: exercise.name,
            muscle_group_id: parseInt(exercise.muscleGroupId),
            reps: exercise.reps,
            sets: exercise.sets,
            duration: exercise.duration,
        });
        setExercise({
            accountId: tokenData.account["id"],
            name: "",
            muscleGroupId: "",
            reps: "",
            sets: "",
            duration: "",
        });
    }

    if (result.isError) {
        console.log("error");
    }

    return (
        <>
            <button
                type="button"
                className="idea-button circular-button"
                data-bs-toggle="modal"
                data-bs-target="#idea">
                Exercise Ideas
            </button>
            <div
                className="modal fade"
                id="idea"
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
                                Test
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
                                        Exercise Name:
                                    </label>
                                    <input
                                        value={exercise.name}
                                        name="name"
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <label
                                        className="input-group-text"
                                        htmlFor="inputGroupSelect01">
                                        Muscle Group
                                    </label>
                                    <select
                                        value={exercise.muscleGroupId}
                                        name="muscleGroupId"
                                        onChange={handleChange}
                                        className="form-select"
                                        id="inputGroupSelect01">
                                        <option value>
                                            Choose Muscle Group
                                        </option>
                                        {data?.muscle_groups.map((mg) => {
                                            return (
                                                <option
                                                    value={mg.id}
                                                    key={mg.id}>
                                                    {mg.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <button type="button" onClick={getIdeas}>
                                        Give me Ideas
                                    </button>
                                    <div className="input-group mb-3">
                                        <label
                                            className="input-group-text"
                                            htmlFor="inputGroupSelect01">
                                            Ideas
                                        </label>
                                        <select
                                            value={exercise.name}
                                            name="name"
                                            onChange={handleChange}
                                            className="form-select"
                                            id="inputGroupSelect01">
                                            <option value>
                                                Choose Exercise
                                            </option>
                                            {ideas?.map((ex) => {
                                                return (
                                                    <option value={ex} key={ex}>
                                                        {ex}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <span
                                        className="input-group-text"
                                        id="addon-wrapping">
                                        Reps (optional)
                                    </span>
                                    <input
                                        value={exercise.reps}
                                        name="reps"
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Example: 8-10"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span
                                        className="input-group-text"
                                        id="addon-wrapping">
                                        Sets (optional)
                                    </span>
                                    <input
                                        value={exercise.sets}
                                        name="sets"
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Example: 3"
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <span
                                        className="input-group-text"
                                        id="addon-wrapping">
                                        Duration (optional)
                                    </span>
                                    <input
                                        value={exercise.duration}
                                        name="duration"
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="Example: 30 minutes"
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
export default IdeasModal;
