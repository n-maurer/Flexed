import { useState } from "react";
import { useEditExWoDateMutation } from "./ExDateWoAPI";
import "./cw.css";

function EditCurrentExerciseModal({ exercise }) {
    const [editExWoDate, result] = useEditExWoDateMutation();

    const [currentExercise, setExercise] = useState({
        workout_id: exercise.wo_id,
        wo_date: exercise.wo_date,
        exercise_id: exercise.exercise_id,
        account_id: exercise.account_id,
        status: exercise.status,
        weight_done: exercise.weight_done,
        duration_done: exercise.duration_done,
    });
    // console.log(exercise);

    const handleChange = (event) => {
        setExercise({
            ...currentExercise,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        editExWoDate([
            exercise.id,
            [
                currentExercise.workout_id,
                currentExercise.wo_date,
                currentExercise.exercise_id,
                currentExercise.account_id,
                "yes",
                `${currentExercise.weight_done} lbs`,
                currentExercise.duration_done,
            ],
        ]);
    };

    const targetHash = `#f${exercise.id}`;
    const target = `f${exercise.id}`;
    return (
        <>
            {currentExercise.weight_done === "None" ? (
                <button
                    type="button"
                    className="circular-button-small no-margin-top"
                    data-bs-toggle="modal"
                    data-bs-target={targetHash}>
                    Complete
                </button>
            ) : (
                <button
                    type="button"
                    className="circular-button-small no-margin-top"
                    data-bs-toggle="modal"
                    data-bs-target={targetHash}>
                    Update
                </button>
            )}

            <div
                className="modal fade"
                id={target}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel">
                                {props.exercise.exercise_id}
                            </h1> */}
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                {/* <div className="input-group mb-3">
                                    <span
                                        className="input-group-text"
                                        id="addon-wrapping">
                                        Weight Done
                                    </span>
                                    <input
                                        value={currentExercise.weight_done}
                                        name="weight_done"
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        placeholder={exercise.weight_done}
                                    />
                                </div> */}
                                <div className="input-group mb-3">
                                    <span
                                        className="input-group-text"
                                        id="addon-wrapping">
                                        Weight Done
                                    </span>
                                    <input
                                        className="form-control"
                                        aria-label="Weight Done"
                                        type="number"
                                        step="0.5"
                                        min="0.5"
                                        max="1000"
                                        name="weight_done"
                                        onChange={handleChange}
                                        value={currentExercise.weight_done}
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
                                        Complete
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
export default EditCurrentExerciseModal;
