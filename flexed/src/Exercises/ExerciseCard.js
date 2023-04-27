import DeleteExerciseModal from "./DeleteExerciseModal";

function ExerciseCard(props) {
    var searchLink =
        "https://www.google.com/search?q=" +
        props.exercise.name.replace(/ /g, "+");

    var hashedId = `#id${props.exercise.id}`;
    var unhashedId = `id${props.exercise.id}`;
    return (
        <>
            <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target={hashedId}
                className="list-group-item list-group-item-action no-margin text-left">
                {props.exercise.name}
                <p className="float-right">
                    <i className="arrow right"></i>
                </p>
            </button>

            <div
                className="modal fade"
                id={unhashedId}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLongTitle">
                                <a
                                    href={searchLink}
                                    target="_blank"
                                    className="name-link">
                                    {props.exercise.name}
                                </a>
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="card-text">
                                Muscle Group: {props.exercise.muscle_group}
                            </p>
                            {props.exercise.duration ? (
                                <>
                                    <p>Duration: {props.exercise.duration}</p>
                                    <p>Sets: {props.exercise.sets}</p>
                                </>
                            ) : (
                                <>
                                    {" "}
                                    <p>Reps: {props.exercise.reps}</p>
                                    <p>Sets: {props.exercise.sets}</p>
                                </>
                            )}
                            <p>
                                <a
                                    href={searchLink}
                                    target="_blank"
                                    className="name-link">
                                    More Info
                                </a>
                            </p>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="form-button-close"
                                    data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col" key={props.exercise.id}>
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">
                            <a
                                href={searchLink}
                                target="_blank"
                                className="name-link">
                                {props.exercise.name}
                            </a>
                        </h5>
                        {props.exercise.duration ? (
                            <>
                                <p className="card-text">
                                    Duration: {props.exercise.duration}
                                </p>
                                <p className="card-text">
                                    Sets: {props.exercise.sets}
                                </p>
                            </>
                        ) : (
                            <>
                                {" "}
                                <p className="card-text">
                                    Reps: {props.exercise.reps}
                                </p>
                                <p className="card-text">
                                    Sets: {props.exercise.sets}
                                </p>
                            </>
                        )}
                        <p className="card-text">
                            Muscle Group: {props.exercise.muscle_group}
                        </p>
                    </div>
                    {props.exercise.account_id ===
                        props.tokenData?.account["id"] && (
                        <DeleteExerciseModal exercise_id={props.exercise.id} />
                    )}
                </div>
            </div> */}
        </>
    );
}
export default ExerciseCard;
