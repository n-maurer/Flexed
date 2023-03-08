import { useState } from "react";
import { useEditExWoDateMutation } from "./ExDateWoAPI";

function CurrentExerciseModal({ exercise }) {
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
        console.log({
            workout_id: currentExercise.workout_id,
            wo_date: currentExercise.wo_date,
            exercise_id: currentExercise.exercise_id,
            account_id: currentExercise.account_id,
            status: "yes",
            weight_done: currentExercise.weight_done,
            duration_done: currentExercise.duration_done,
        });
        editExWoDate([
            exercise.id,
            [
                currentExercise.workout_id,
                currentExercise.wo_date,
                currentExercise.exercise_id,
                currentExercise.account_id,
                "yes",
                currentExercise.weight_done,
                currentExercise.duration_done,
            ],
            // {
            //     workout_id: currentExercise.workout_id,
            //     wo_date: currentExercise.wo_date,
            //     exercise_id: currentExercise.exercise_id,
            //     account_id: currentExercise.account_id,
            //     status: currentExercise.status,
            //     weight_done: currentExercise.weight_done,
            //     duration_done: currentExercise.duration_done,
            // },
        ]);
    };

    const targetHash = `#f${exercise.id}`;
    const target = `f${exercise.id}`;
    return (
        <>
            <button
                type="button"
                className="btn btn-dark cards"
                data-bs-toggle="modal"
                data-bs-target={targetHash}>
                Complete
            </button>
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
                                <div className="input-group mb-3">
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
                                        className="btn btn-dark">
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
export default CurrentExerciseModal;
