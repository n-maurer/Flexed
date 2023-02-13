function WOCard(props) {
    return (
        <div className="col" key={props.wo.id}>
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{props.wo.name}</h5>
                    <p className="card-text"></p>
                    <button type="button" className="btn btn-success">
                        Add Exercise
                    </button>
                </div>
            </div>
        </div>
    );
}
export default WOCard;
