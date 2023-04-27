import EditCurrentExerciseModal from "./EditCurrentExerciseModal";
import { useGetLastWeightQuery } from "./ExDateWoAPI";
import "./cw.css";

function CurrentExerciseModal({ exercise, currentDate }) {
    const { data, isLoading } = useGetLastWeightQuery(exercise.exercise_id);

    console.log(data[1].most_recent_date);
    console.log(currentDate);

    return (
        <div className="col" key={exercise.id}>
            <div className="card h-100">
                <div className="card-body">
                    <h5>{exercise.exercise_name}</h5>
                    <h6>Reps: {exercise.reps}</h6>
                    <h6>Sets: {exercise.sets}</h6>
                    <h6>Weight Done: {exercise.weight_done}</h6>
                    {isLoading ? (
                        <>
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {data.length > 1 && (
                                <>
                                    {data[1].weight_done !== "None" &&
                                        data[1].most_recent_date !==
                                            currentDate && (
                                            <>
                                                <h6>
                                                    Last Weight Done:{" "}
                                                    {data[1].weight_done}
                                                </h6>
                                            </>
                                        )}
                                </>
                            )}
                        </>
                    )}
                    {exercise.status === "no" ? (
                        <div className="completed"></div>
                    ) : (
                        <div className="incomplete"></div>
                    )}
                </div>

                <EditCurrentExerciseModal exercise={exercise} />
            </div>
        </div>
    );
}
export default CurrentExerciseModal;
