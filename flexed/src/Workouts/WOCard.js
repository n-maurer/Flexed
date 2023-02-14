import { useGetExerciseByWorkoutQuery } from "./WorkoutApi";
import AddExerciseModal from "./AddExerciseModal";

function WOCard(props) {
    const { data, error, isLoading } = useGetExerciseByWorkoutQuery(
        props.wo.id
    );
    let propsId = toString(props.wo.id);

    return (
        <div className="col" key={props.wo.id}>
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{props.wo.name}</h5>
                    <p className="card-text"></p>
                    <div className="cards">
                        <div className="">
                            {data?.exercises.map((ex) => {
                                return <li key={ex.id}>{ex.exercise}</li>;
                            })}
                        </div>
                        <AddExerciseModal wo={props.wo.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WOCard;
