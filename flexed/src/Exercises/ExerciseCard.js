import DeleteExerciseModal from "./DeleteExerciseModal";

function ExerciseCard(props) {
    var searchLink =
        "https://www.google.com/search?q=" +
        props.exercise.name.replace(/ /g, "+");
    return (
        <>
            <div className="col" key={props.exercise.id}>
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
            </div>
        </>
    );
}
export default ExerciseCard;
