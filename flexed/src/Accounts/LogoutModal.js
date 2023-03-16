import { useLogoutMutation } from "./AuthApi";
import { useNavigate } from "react-router-dom";

function LogoutModal() {
    const [logout, result] = useLogoutMutation();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        logout();
        navigate("/");
    };
    if (result.isError) {
        console.log("error");
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#logout">
                Logout
            </button>
            <div
                className="modal fade"
                id="logout"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel">
                                Are you sure you want to logout?
                            </h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <button
                                    type="button"
                                    className="form-button-close"
                                    data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button
                                    style={{ marginLeft: "5px" }}
                                    type="submit"
                                    data-bs-dismiss="modal"
                                    className="form-button-action">
                                    Logout
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LogoutModal;
