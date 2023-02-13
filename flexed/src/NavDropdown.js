function NavbarDropdown() {
    return (
        <div className="dropdown">
            <button
                style={{ width: "70px" }}
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"></button>
            <ul className="dropdown-menu">
                <li className="second-link">
                    <a className="dropdown-item" href="/muscle-groups">
                        Muscle Groups
                    </a>
                </li>
                <li className="second-link">
                    <a className="dropdown-item" href="/exercises">
                        Exercises
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="/workouts">
                        Workouts
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default NavbarDropdown;
