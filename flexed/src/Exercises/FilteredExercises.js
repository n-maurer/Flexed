import { useFilterExercisesQuery } from "./ExerciseApi";
import ExerciseModal from "./CreateExerciseModal";
import { useGetTokenQuery } from "../Accounts/AuthApi";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import FilterDropdown from "./FilterDropdown";

function FilteredExercises() {
    const params = useParams();
    const { data, error, isLoading } = useFilterExercisesQuery(params.id);
    const {
        data: tokenData,
        error: tokenError,
        isLoading: tokenIsLoading,
    } = useGetTokenQuery();

    console.log(data);

    return (
        <>
            <div className="ex-buttons">
                {tokenData && <ExerciseModal />}
                <FilterDropdown />
            </div>

            {isLoading === true ? (
                <Loading />
            ) : (
                <div>
                    <h2>{data.exercises[0]?.muscle_group}</h2>

                    <div className="cards">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {data?.exercises.map((exercise) => {
                                return (
                                    <div className="col" key={exercise.id}>
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {exercise.name}
                                                </h5>
                                                {exercise.duration ? (
                                                    <>
                                                        <p className="card-text">
                                                            Duration:{" "}
                                                            {exercise.duration}
                                                        </p>
                                                        <p className="card-text">
                                                            Sets:{" "}
                                                            {exercise.sets}
                                                        </p>
                                                    </>
                                                ) : (
                                                    <>
                                                        {" "}
                                                        <p className="card-text">
                                                            Reps:{" "}
                                                            {exercise.reps}
                                                        </p>
                                                        <p className="card-text">
                                                            Sets:{" "}
                                                            {exercise.sets}
                                                        </p>
                                                    </>
                                                )}
                                                <p className="card-text">
                                                    Muscle Group:{" "}
                                                    {exercise.muscle_group}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default FilteredExercises;
