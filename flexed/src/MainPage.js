import "./main.css";
import { Link } from "react-router-dom";

function MainPage() {
    return (
        <>
            <header className="masthead">
                <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end">
                            <h1 className="text-white font-weight-bold">
                                Your Favorite Place to Create and Track Workouts
                            </h1>
                            <hr className="divider" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 mb-5">
                                Flexed empowers you to stay accountable and
                                achieve your fitness goals by tracking your
                                workouts. Take the first step towards success by
                                signing up and creating your initial workout
                                today.
                            </p>
                            {/* <a
                                className="btn find-more btn-primary btn-xl"
                                href="#about">
                                Find Out More
                            </a> */}
                        </div>
                    </div>
                </div>
            </header>

            <section className="page-section bg-primary" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">
                                We've got what you need!
                            </h2>
                            <hr className="divider divider-light" />
                            <p className="text-white-75 mb-4">
                                Flexed lets you discover a multitude of diverse
                                workouts curated by a community of fitness
                                enthusiasts, just like you.
                            </p>
                            <Link to="/workouts">
                                <p
                                    className="btn btn-light btn-xl"
                                    href="/workouts">
                                    Browse Workouts
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section services" id="services">
                <div className="container px-4 px-lg-5">
                    <h2 className="text-center mt-0">Flexed Routine</h2>
                    <hr className="divider" />
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2">
                                    <img
                                        src={require("./images/create.png")}
                                        alt="Create Icon"
                                    />
                                </div>

                                <h3 className="h4 mb-2">Create</h3>
                                <p className="text-muted mb-0">
                                    Create customizable exercises and workouts
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2">
                                    <img
                                        src={require("./images/add.png")}
                                        alt="Add Icon"
                                    />
                                </div>
                                <h3 className="h4 mb-2">Add</h3>
                                <p className="text-muted mb-0">
                                    Add exercises to workouts and workouts to
                                    your calendar
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2">
                                    <img
                                        src={require("./images/track2.png")}
                                        alt="Track Icon"
                                    />
                                </div>
                                <h3 className="h4 mb-2">Track</h3>
                                <p className="text-muted mb-0">
                                    Track your daily workouts and see your
                                    progress
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2">
                                    <img
                                        src={require("./images/repeat.png")}
                                        alt="Repeat Icon"
                                    />
                                </div>
                                <h3 className="h4 mb-2">Repeat</h3>
                                <p className="text-muted mb-0">
                                    Keep the routine up so you reach your
                                    fitness goals!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-light py-5">
                <div className="container px-4 px-lg-5">
                    <div className="small text-center text-muted">Flexed</div>
                </div>
            </footer>
        </>
    );
}
export default MainPage;
