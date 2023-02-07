function NavbarDropdown() {
    return (
        <div class="navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
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
                </li>
            </ul>
        </div>
    );
}
export default NavbarDropdown;
