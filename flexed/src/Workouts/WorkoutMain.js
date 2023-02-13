import { useGetWorkoutsQuery } from "./WorkoutApi";

function WorkoutMain() {
    const { data, error, isLoading } = useGetWorkoutsQuery();

    return (
        <>
            {isLoading === true ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="cards">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {data?.workouts.map((wo) => {
                            return (
                                <div className="col" key={wo.id}>
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {wo.name}
                                            </h5>
                                            <p className="card-text"></p>
                                            <a
                                                href="#"
                                                className="btn btn-primary">
                                                View {wo.name} Exercises
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}
export default WorkoutMain;
