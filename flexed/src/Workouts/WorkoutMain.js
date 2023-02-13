import { useGetWorkoutsQuery } from "./WorkoutApi";
import WOCard from "./WOCard";
import WorkoutModal from "./CreateWorkoutModal";

function WorkoutMain() {
    const { data, error, isLoading } = useGetWorkoutsQuery();

    return (
        <>
            <WorkoutModal />
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
                            return <WOCard wo={wo} key={wo.id} />;
                        })}
                    </div>
                </div>
            )}
        </>
    );
}
export default WorkoutMain;
