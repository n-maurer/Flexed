import "./App.css";
import NavBar from "./Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MGMain from "./Muscle-Groups/MGMain";
import MainPage from "./MainPage";
import ExerciseMain from "./Exercises/ExerciseMain";
import WorkoutMain from "./Workouts/WorkoutMain";
import CalendarPage from "./Dates/CalendarPage";
import CurrentWorkoutMain from "./Current-Workout/CurrentWorkoutMain";
import FilteredExercises from "./Exercises/FilteredExercises";
// import { AuthProvider, useToken } from "./UseToken";

// function GetToken() {
//     useToken();
//     return null;
// }

function App() {
    return (
        <div className="App">
            <div>
                <BrowserRouter>
                    {/* <GetToken /> */}
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/muscle-groups" element={<MGMain />} />
                        <Route path="/exercises" element={<ExerciseMain />} />
                        <Route path="/workouts" element={<WorkoutMain />} />
                        <Route
                            path="/calendar/:id"
                            element={<CalendarPage />}
                        />
                        <Route
                            path="/current-workout/:date/:wd/:id/:account"
                            element={<CurrentWorkoutMain />}
                        />
                        <Route
                            path="/exercises/:id"
                            element={<FilteredExercises />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
