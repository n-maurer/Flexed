import { useGetWorkoutDatesByAccountIdQuery } from "./DatesApi";

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
                                <div className="col" key={dt.id}>
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5>{dt.name}</h5>
                                            <button
                                                type="button"
                                                className="btn btn-secondary btn-sm">
                                                Begin Workout
                                            </button>
                                        </div>
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
