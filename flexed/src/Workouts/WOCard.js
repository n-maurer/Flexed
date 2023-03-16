import { useGetExerciseByWorkoutQuery } from "./WorkoutApi";
import AddExerciseModal from "./AddExerciseModal";
import { useGetTokenQuery } from "../Accounts/AuthApi";
import "./wo.css";

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
    console.log(props);

    return (
        <div className="col" key={props.wo.id}>
            <div className="card h-100">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.wo.name}</h5>
                    <p className="card-text"></p>
                    <div className="cards flex-grow-1">
                        <div>
                            {data?.exercises.map((ex) => {
                                return (
                                    <ul className="exercise-ul">
                                        <li className="exercise-li" key={ex.id}>
                                            {ex.exercise}
                                        </li>
                                    </ul>
                                );
                            })}
                        </div>
                    </div>
                    <div className="author mt-auto">
                        Author: {props.wo.username}
                    </div>
                    {tokenData ? (
                        <>
                            {tokenData.account["id"] === props.wo.account_id ? (
                                <div className="ex-modal">
                                    <AddExerciseModal
                                        wo={props.wo.id}
                                        wo_name={props.wo.name}
                                    />
                                </div>
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
        // <div className="col" key={props.wo.id}>
        //     <div className="card h-100">
        //         <div className="card-body">
        //             <h5 className="card-title">{props.wo.name}</h5>
        //             <p className="card-text"></p>
        //             <div className="cards">
        //                 <div className="">
        //                     {data?.exercises.map((ex) => {
        //                         return (
        //                             <ul className="exercise-ul">
        //                                 <li className="exercise-li" key={ex.id}>
        //                                     {ex.exercise}
        //                                 </li>
        //                             </ul>
        //                         );
        //                     })}
        //                 </div>
        //                 <div className="author">
        //                     Author: {props.wo.username}
        //                 </div>
        //                 {tokenData ? (
        //                     <>
        //                         {tokenData.account["id"] ===
        //                         props.wo.account_id ? (
        //                             <div className="ex-modal">
        //                                 <AddExerciseModal
        //                                     wo={props.wo.id}
        //                                     wo_name={props.wo.name}
        //                                 />
        //                             </div>
        //                         ) : (
        //                             <></>
        //                         )}
        //                     </>
        //                 ) : (
        //                     <></>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
export default WOCard;
