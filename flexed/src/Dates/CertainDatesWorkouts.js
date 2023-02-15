import { useGetWorkoutByDateQuery } from "./DatesApi";
function CertainDaysWorkout(props) {
    const { data, error, isLoading } = useGetWorkoutByDateQuery(props.longDate);

    // return (
    //     {data ? (<></>):(<></>)}
    // )
}
export default CertainDaysWorkout;
