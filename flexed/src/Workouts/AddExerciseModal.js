import { Navigate } from "react-router-dom";
import { useAddExerciseMutation } from "./WorkoutApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import Select from "react-select";
import { useGetExercisesQuery } from "../Exercises/ExerciseApi";

function AddExerciseModal() {
    const { data, error, isLoading } = useGetExercisesQuery();
    const navigate = useNavigate();
    // const [error, setError] = useState("");
    const [createWE, result] = useAddExerciseMutation();
    const [wERelationshipList, setwERelationship] = useState([]);
    const options = [];
    const newData = data;
    if (newData) {
        for (let x in newData["exercises"]) {
            let option = {
                value: newData["exercises"][x]["id"],
                label: newData["exercises"][x]["name"],
                mg: newData["exercises"][x]["muscle_group"],
            };
            options.push(option);
        }
    }

    const handleChange = (event) => {
        setwERelationship({
            ...wERelationshipList,
            [event.target.name]: event.target.value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        for (let x in wERelationshipList) {
            createWE({
                workout_id: 1,
                exercise_id: wERelationshipList[x],
                account_id: 1,
            });
        }
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
                className="btn btn-dark cards"
                data-bs-toggle="modal"
                data-bs-target="#add-ex-modal">
                Add Workout
            </button>
            <div
                className="modal fade"
                id="add-ex-modal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="add-ex-modalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="add-ex-modalLabel">
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
                                        Exercise:
                                    </label>
                                    <input
                                        // value={workout.name}
                                        name="name"
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <Select
                                    options={options}
                                    isMulti
                                    name="colors"
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />

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
export default AddExerciseModal;
