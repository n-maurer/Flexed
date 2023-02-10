import { useGetMuscleGroupsQuery } from "../flexedApi";

export default function MGMain() {
    const { data, error, isLoading } = useGetMuscleGroupsQuery();
    // console.log(data);
    return <></>;
}
