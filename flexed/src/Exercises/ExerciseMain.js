import { useGetExercisesQuery } from "./ExerciseApi";
import ExerciseModal from "./CreateExerciseModal";
import { useGetTokenQuery } from "../Accounts/AuthApi";
import Loading from "../Loading";
import FilterDropdown from "./FilterDropdown";
import "./exercises.css";
import ExerciseCard from "./ExerciseCard";

function ExerciseMain() {
    const { data, isLoading } = useGetExercisesQuery();
    const { data: tokenData } = useGetTokenQuery();

    return (
        <>
            <div className="ex-buttons">
                {tokenData && (
                    <>
                        <ExerciseModal />
                    </>
                )}
                <FilterDropdown />
            </div>

            {isLoading === true ? (
                <Loading />
            ) : (
                // <div>
                //     <h2>All Exercises</h2>

                //     <div className="row row-cols-1 row-cols-md-3 g-4 mg-top-5">
                //         {data?.exercises.map((exercise) => {
                //             return (
                //                 <a
                //                     href="#"
                //                     class="list-group-item list-group-item-action no-margin text-left">
                //                     {exercise.name}
                //                     <p className="float-right">
                //                         <i class="arrow right"></i>
                //                     </p>
                //                 </a>
                //             );
                //         })}
                //     </div>
                // </div>

                <div>
                    <h2>All Exercises</h2>
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

export default ExerciseMain;
