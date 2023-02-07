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
                <li>
                    <a class="dropdown-item" href="#">
                        Action
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        Another action
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        Something else here
                    </a>
                </li>
            </ul>
        </div>
    );
}
export default NavbarDropdown;
