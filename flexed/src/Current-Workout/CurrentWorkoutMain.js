import { useGetExWoDateByDateQuery } from "./ExDateWoAPI";
import { useParams } from "react-router-dom";

function CurrentWorkoutMain() {
    const date = useParams();
    const { data, error, isLoading } = useGetExWoDateByDateQuery(date.date);
    console.log(data);
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
                    {data?.table
                        .filter((exercise) => exercise["account_id"] === 1)
                        .map((exercise) => {
                            return (
                                <div className="col" key={exercise.id}>
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5>{exercise.exercise_name}</h5>
                                            <h6>{exercise.reps}</h6>
                                            <h6>{exercise.sets}</h6>
                                            <h6>{exercise.status}</h6>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </>
            )}
        </div>
    );
}
export default CurrentWorkoutMain;
