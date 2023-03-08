import { useGetExerciseByWorkoutQuery } from "./WorkoutApi";
import AddExerciseModal from "./AddExerciseModal";
import { useGetTokenQuery } from "../Accounts/AuthApi";

function WOCard(props) {
    const { data, error, isLoading } = useGetExerciseByWorkoutQuery(
        props.wo.id
    );
    const {
        data: tokenData,
        error: tokenError,
        isLoading: tokenIsLoading,
    } = useGetTokenQuery();
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
                        {tokenData ? (
                            <>
                                {tokenData.account["id"] ===
                                props.wo.account_id ? (
                                    <>
                                        <AddExerciseModal
                                            wo={props.wo.id}
                                            wo_name={props.wo.name}
                                        />
                                    </>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WOCard;
