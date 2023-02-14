import { Navigate } from "react-router-dom";
import { useAddExerciseMutation } from "./WorkoutApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import Select from "react-select";
import { useGetExercisesQuery } from "../Exercises/ExerciseApi";
import { useGetMuscleGroupsQuery } from "../Muscle-Groups/muscleGroupApi";

function AddExerciseModal() {
    const {
        data: exerciseData,
        error: exerciseError,
        isLoading: exerciseLoading,
    } = useGetExercisesQuery();
    const {
        data: mgData,
        error: mgError,
        isLoading: mgLoading,
    } = useGetMuscleGroupsQuery();

    const navigate = useNavigate();
    const [createWE, result] = useAddExerciseMutation();
    const [wERelationshipList, setwERelationship] = useState([]);
    let exerciseOptions = [];
    const mgOptions = [];
    const [mgId, setMGId] = useState();

    // useEffect(() => {
    if (exerciseData) {
        for (let x in exerciseData["exercises"]) {
            let option = {
                value: exerciseData["exercises"][x]["id"],
                label: exerciseData["exercises"][x]["name"],
                mg: exerciseData["exercises"][x]["muscle_group_id"],
            };
            if (exerciseOptions.includes(option) === false) {
                exerciseOptions.push(option);
            }
        }
    }
    if (mgData) {
        for (let x in mgData["muscle_groups"]) {
            let option = {
                value: mgData["muscle_groups"][x]["id"],
                label: mgData["muscle_groups"][x]["name"],
            };
            mgOptions.push(option);
        }
    }
    // }, [mgOptions]);

    const handleChange = (event) => {
        setwERelationship({
            ...wERelationshipList,
            [event.target.name]: event.target.value,
        });
    };
    const handleMGSelectChange = async (seletedOption) => {
        let x = exerciseOptions;
        setMGId(seletedOption.value);
        exerciseOptions = exerciseOptions.filter((ex) => ex.mg == mgId);
    };
    console.log(exerciseOptions);
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
                Add Exercises
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
                                <div className="mb-3">
                                    {mgLoading ? (
                                        <div className="d-flex justify-content-center">
                                            <div
                                                className="spinner-border"
                                                role="status">
                                                <span className="visually-hidden">
                                                    Loading...
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <Select
                                            onChange={handleMGSelectChange}
                                            options={mgOptions}
                                            name="mgs"
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            placeholder="Select Muscle Group"
                                        />
                                    )}
                                </div>
                                {mgId ? (
                                    <div className="mb-3">
                                        {exerciseLoading ? (
                                            <div className="d-flex justify-content-center">
                                                <div
                                                    className="spinner-border"
                                                    role="status">
                                                    <span className="visually-hidden">
                                                        Loading...
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            <Select
                                                options={exerciseOptions}
                                                isMulti
                                                name="exercises"
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                placeholder="Select Exercises"
                                            />
                                        )}
                                    </div>
                                ) : (
                                    <></>
                                )}

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
