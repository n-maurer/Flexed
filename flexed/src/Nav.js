import "./Nav.css";
import NavbarDropdown from "./NavDropdown";

function NavBar() {
    return (
        <nav
            className="navbar navbar-expand-md bg-dark"
            style={{ height: "auto" }}>
            <div className="container-fluid d-flex justify-content-between">
                <div>
                    <NavbarDropdown />
                </div>
                <div className="title" style={{ height: "100px" }}>
                    <img
                        id="light-nav-logo"
                        src={require("./images/flexed-title-transparent.png")}
                        alt="Flexed Mascot Logo"
                        style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>

                <div style={{ height: "100px" }}>
                    <img
                        id="light-nav-logo"
                        src={require("./images/flexed-mascot-transparent.png")}
                        alt="Flexed Mascot Logo"
                        style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
