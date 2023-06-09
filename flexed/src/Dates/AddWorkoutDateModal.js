import { useCreateWorkoutDateMutation } from "./DatesApi";
import { useState } from "react";
import { useGetWorkoutsQuery } from "../Workouts/WorkoutApi";
import { useGetTokenQuery } from "../Accounts/AuthApi";
// import { useGetExerciseByWorkoutQuery } from "../Workouts/WorkoutApi";
import { useGetAllWEReltaionshipsQuery } from "../Workouts/WorkoutApi";
// import { useCreateWoExRelationship } from "../Current-Workout/ExWoRelationshipApi";
import { useCreateExWoDateRelationshipMutation } from "../Current-Workout/ExDateWoAPI";

function EDModal(props) {
    const { data: woData, isLoading } = useGetWorkoutsQuery();

    const [createWorkoutDate, result] = useCreateWorkoutDateMutation();
    const [createExWoDate, ewdResult] = useCreateExWoDateRelationshipMutation();
    // const [createWoExRelationship, woExResult] = useCreateWoExRelationship();
    const [workoutId, setWorkoutId] = useState({ id: "" });
    const { data: tokenData } = useGetTokenQuery();
    const { data: werData } = useGetAllWEReltaionshipsQuery();
    // console.log(werData);

    const handleChange = (event) => {
        setWorkoutId({
            ...workoutId,
            [event.target.name]: event.target.value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        createWorkoutDate({
            workout_id: parseInt(workoutId.id),
            account_id: tokenData.account["id"],
            wo_date: props.date,
        });
        for (let i of werData["we-tables"]) {
            if (i["workout_id"] === parseInt(workoutId.id)) {
                createExWoDate({
                    workout_id: parseInt(workoutId.id),
                    wo_date: props.date,
                    exercise_id: i["exercise_id"],
                    account_id: tokenData.account["id"],
                    status: "no",
                    weight_done: "None",
                    duration_done: "None",
                });
            }
        }
    }
    if (result.isError) {
        console.log("error");
    }
    // async function handleTest(e) {
    //     console.log(werData);
    //     for (let i of werData["we-tables"]) {
    //         if (i["workout_id"] === parseInt(workoutId.id)) {
    //             console.log({
    //                 workout_id: parseInt(workoutId.id),
    //                 wo_date: props.date,
    //                 exercise_id: i["exercise_id"],
    //                 account_id: tokenData.account["id"],
    //                 status: "false",
    //                 weight_done: "None",
    //                 duration_done: "None",
    //             });
    //         }
    //     }
    //     console.log(workoutId.id);
    // }

    return (
        <>
            <button
                type="button"
                className="circular-button"
                data-bs-toggle="modal"
                data-bs-target="#addWoDate">
                Add Workout to {props.shortDate}
            </button>
            <div
                className="modal fade"
                id="addWoDate"
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
                                Add Workout to {props.shortDate}
                            </h1>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    {isLoading ? (
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
                                        <select
                                            value={workoutId.id}
                                            name="id"
                                            onChange={handleChange}
                                            className="form-select"
                                            id="inputGroupSelect01">
                                            <option value>
                                                Choose Workout
                                            </option>
                                            {woData?.workouts.map((wo) => {
                                                return (
                                                    <option
                                                        value={wo.id}
                                                        key={wo.id}>
                                                        {wo.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    )}
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
                                    {/* <button
                                        type="button"
                                        onClick={handleTest}
                                        className="btn btn-primary">
                                        Test
                                    </button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EDModal;
