import { useDeleteExerciseMutation } from "./ExerciseApi";
import { useEffect } from "react";

function DeleteExerciseModal(props) {
    const [deleteExercise, result] = useDeleteExerciseMutation();

    async function handleSubmit(e) {
        e.preventDefault();
        deleteExercise(props.exercise_id);
    }

    if (result.isError) {
        console.log("error");
    }
    return (
        <>
            <button
                className="delete-button"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addMg">
                x
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
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    Are you sure you want to delete?
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="form-button-close"
                                        data-bs-dismiss="modal">
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        data-bs-dismiss="modal"
                                        className="form-button-action">
                                        Delete
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
export default DeleteExerciseModal;
