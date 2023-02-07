import "./Nav.css";
import NavbarDropdown from "./NavDropdown";
import { NavLink } from "react-router-dom";

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
                    <NavLink to="/">
                        <img
                            className="nav-img"
                            id="light-nav-logo"
                            src={require("./images/flexed-title-transparent.png")}
                            alt="Flexed Mascot Logo"
                        />
                    </NavLink>
                </div>
                <div className="mascot" style={{ height: "100px" }}>
                    <NavLink to="/">
                        <img
                            className="nav-img"
                            id="light-nav-logo"
                            src={require("./images/flexed-mascot-transparent.png")}
                            alt="Flexed Mascot Logo"
                        />
                    </NavLink>
                </div>

                <div
                    className="btn-group-vertical"
                    role="group"
                    aria-label="Vertical button group">
                    <button type="button" className="btn btn-dark">
                        Sign Up
                    </button>
                    <button type="button" className="btn btn-dark">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
