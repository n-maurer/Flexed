import { useGetMuscleGroupsQuery } from "../Muscle-Groups/muscleGroupApi";
import Loading from "../Loading";
import { Link } from "react-router-dom";

function FilterDropdown() {
    const { data: mgData, isLoading: mgLoading } = useGetMuscleGroupsQuery();

    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Filter{" "}
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item all" href="/exercises">
                        All
                    </a>
                </li>
                {mgLoading ? (
                    <>
                        <Loading />
                    </>
                ) : (
                    <>
                        {mgData.muscle_groups?.map((mg) => {
                            return (
                                <li key={mg.id}>
                                    <a
                                        className="dropdown-item"
                                        href={`/exercises/${mg.id}`}>
                                        {mg.name}
                                    </a>
                                </li>
                            );
                        })}
                    </>
                )}

                <li>
                    <a className="dropdown-item" href="/workouts">
                        Workouts
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default FilterDropdown;
