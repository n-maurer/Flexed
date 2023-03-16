import "./MG.css";
import { useGetMuscleGroupsQuery } from "./muscleGroupApi";
import MGModal from "./CreateMGModal";
import { Link } from "react-router-dom";

function MGMain() {
    const { data, error, isLoading } = useGetMuscleGroupsQuery();

    return (
        <>
            <MGModal />
            {isLoading === true ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="cards">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {data?.muscle_groups.map((mg) => {
                            return (
                                <div className="col" key={mg.id}>
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {mg.name}
                                            </h5>
                                            <p className="card-text"></p>
                                            <Link to={`/exercises/${mg.id}`}>
                                                <button className="circular-button-small view-ex">
                                                    View {mg.name} Exercises
                                                </button>
                                            </Link>
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
export default MGMain;
