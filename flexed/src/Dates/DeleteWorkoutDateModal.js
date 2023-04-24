import { useDeleteWorkoutDateMutation } from "./DatesApi";
import { useEffect } from "react";

function DeleteWorkoutDateModal(props) {
    const [deleteWorkoutDate, result] = useDeleteWorkoutDateMutation();

    async function handleSubmit(e) {
        e.preventDefault();
        deleteWorkoutDate(props.wdId);
    }

    if (result.isError) {
        console.log("error");
    }

    const hashedId = `#deleteWO${props.wdId}`;
    const otherId = `deleteWO${props.wdId}`;

    return (
        <>
            <button
                className="delete-button"
                type="button"
                data-bs-toggle="modal"
                data-bs-target={hashedId}>
                x
            </button>
            <div
                className="modal fade"
                id={otherId}
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
export default DeleteWorkoutDateModal;
