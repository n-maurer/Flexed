import { useFilterExercisesQuery } from "./ExerciseApi";
import ExerciseModal from "./CreateExerciseModal";
import { useGetTokenQuery } from "../Accounts/AuthApi";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import FilterDropdown from "./FilterDropdown";
import ExerciseCard from "./ExerciseCard";

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
                        <div className="row row-cols-1 row-cols-md-3 g-4 mg-top-5">
                            {data?.exercises.map((exercise) => {
                                return (
                                    <ExerciseCard
                                        exercise={exercise}
                                        tokenData={tokenData}
                                    />
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
