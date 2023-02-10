import { useGetMuscleGroupsQuery } from "../flexedApi";

export default function MGMain() {
    const { data, error, isLoading } = useGetMuscleGroupsQuery();

    return (
        <>
            {isLoading === true ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div>
                    {data?.muscle_groups.map((mg) => {
                        return <div key={mg.id}>{mg.name}</div>;
                    })}
                </div>
            )}
        </>
    );
}
