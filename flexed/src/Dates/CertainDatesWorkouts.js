import { useGetWorkoutDatesByAccountIdQuery } from "./DatesApi";
import { Link } from "react-router-dom";
import DeleteWorkoutDateModal from "./DeleteWorkoutDateModal";

function CertainDaysWorkout(props) {
    const { data } = useGetWorkoutDatesByAccountIdQuery(props.userId);

    return (
        <div>
            Your workouts on {props.shortDate}:
            <div className="cards">
                <div className="row row-cols-1 row-cols-md-1 g-4">
                    {data?.date_tables
                        .filter((x) => x["wo_date"] === props.longDate)
                        .map((dt) => {
                            return (
                                <div
                                    className="col current-wo-column"
                                    key={dt.id}>
                                    <div className="card h-100 current-wo-on-calendar ">
                                        <div className="card-body">
                                            <h5>{dt.name}</h5>
                                            <Link
                                                to={`/current-workout/${props.longDate}/${dt.workout_id}/${dt.id}`}>
                                                <button
                                                    type="button"
                                                    className="circular-button-small">
                                                    Begin Workout
                                                </button>
                                            </Link>
                                        </div>
                                        <DeleteWorkoutDateModal
                                            longDate={props.longDate}
                                            wdId={dt.id}
                                            dateData={dt}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
export default CertainDaysWorkout;
