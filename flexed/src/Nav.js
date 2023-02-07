import "./Nav.css";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand" to="/">
                    <img
                        id="light-nav-logo"
                        src={require("./images/flexed-mascot-transparent.png")}
                        alt="Flexed Mascot Logo"
                        height={110}
                    />
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
