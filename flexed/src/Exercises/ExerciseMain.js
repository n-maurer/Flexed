import { useGetExercisesQuery } from "./ExerciseApi";
import ExerciseModal from "./CreateExerciseModal";

function ExerciseMain() {
    const { data, error, isLoading } = useGetExercisesQuery();

    return (
        <>
            <ExerciseModal />
            {isLoading === true ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
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
                                                        Sets: {exercise.sets}
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    {" "}
                                                    <p className="card-text">
                                                        Reps: {exercise.reps}
                                                    </p>
                                                    <p className="card-text">
                                                        Sets: {exercise.sets}
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
            )}
        </>
    );
}

export default ExerciseMain;
