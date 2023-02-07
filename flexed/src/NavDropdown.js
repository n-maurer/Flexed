function NavbarDropdown() {
    return (
        <div class="dropdown">
            <button
                style={{ width: "70px" }}
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"></button>
            <ul class="dropdown-menu">
                <li className="second-link">
                    <a class="dropdown-item" href="#">
                        Muscle Groups
                    </a>
                </li>
                <li className="second-link">
                    <a class="dropdown-item" href="#">
                        Exercises
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        Workouts
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default NavbarDropdown;
