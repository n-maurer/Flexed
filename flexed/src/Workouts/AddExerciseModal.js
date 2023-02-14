import { useAddExerciseMutation } from "./WorkoutApi";
import { useState } from "react";
import Select from "react-select";
import { useGetExercisesQuery } from "../Exercises/ExerciseApi";
import { useGetMuscleGroupsQuery } from "../Muscle-Groups/muscleGroupApi";

function AddExerciseModal(props) {
    const {
        data: exerciseData,

        isLoading: exerciseLoading,
    } = useGetExercisesQuery();
    const {
        data: mgData,

        isLoading: mgLoading,
    } = useGetMuscleGroupsQuery();

    const [createWE, result] = useAddExerciseMutation();
    const [wERelationshipList, setwERelationship] = useState([]);
    let exerciseOptions = [];
    const mgOptions = [];
    const [mgId, setMGId] = useState();

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
    const handleWERChange = (action) => {
        setwERelationship(action);
    };
    const handleMGSelectChange = (seletedOption) => {
        setMGId(seletedOption.value);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        for (let x in wERelationshipList) {
            createWE({
                workout_id: props.wo,
                exercise_id: wERelationshipList[x]["value"],
                account_id: 1,
            });
        }
    }
    if (result.isError) {
        console.log("error");
    }
    let hashTarget = `#f${props.wo}`;
    let target = `f${props.wo}`;
    return (
        <>
            <button
                type="button"
                className="btn btn-dark cards"
                data-bs-toggle="modal"
                data-bs-target={hashTarget}>
                Add Exercises
            </button>
            <div
                className="modal fade"
                id={target}
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
                                Add Exercise to {props.wo_name} Workout
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
                                                onChange={handleWERChange}
                                                options={exerciseOptions.filter(
                                                    (eo) => eo.mg === mgId
                                                )}
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
                                        Add
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
