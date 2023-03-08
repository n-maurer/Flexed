import { useGetExWoDateByDateQuery } from "./ExDateWoAPI";
import { useParams } from "react-router-dom";
import CurrentExerciseModal from "./CurrentExerciseModal";
import "./cw.css";

function CurrentWorkoutMain() {
    const params = useParams();
    const { data, isLoading } = useGetExWoDateByDateQuery(params.date);

    return (
        <div>
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    <div className="cards">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {data?.table
                                .filter(
                                    (exercise) =>
                                        exercise["account_id"] === 1 &&
                                        exercise["ewd_id"] ===
                                            parseInt(params.wd)
                                )
                                .map((exercise) => {
                                    return (
                                        <div className="col" key={exercise.id}>
                                            <div className="card h-100">
                                                <div className="card-body">
                                                    <h5>
                                                        {exercise.exercise_name}
                                                    </h5>
                                                    <h6>
                                                        Reps: {exercise.reps}
                                                    </h6>
                                                    <h6>
                                                        Sets: {exercise.sets}
                                                    </h6>
                                                    <h6>
                                                        Weight Done:{" "}
                                                        {exercise.weight_done}
                                                    </h6>
                                                    {exercise.status ===
                                                    "no" ? (
                                                        <div className="completed"></div>
                                                    ) : (
                                                        <div className="incomplete"></div>
                                                    )}
                                                </div>
                                                <CurrentExerciseModal
                                                    exercise={exercise}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
export default CurrentWorkoutMain;
