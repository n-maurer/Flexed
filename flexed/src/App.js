import "./App.css";
import NavBar from "./Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MGMain from "./Muscle-Groups/MGMain";
import MainPage from "./MainPage";
import ExerciseMain from "./Exercises/ExerciseMain";
import WorkoutMain from "./Workouts/WorkoutMain";
import CalendarPage from "./Accounts/CalendarPage";

function App() {
    return (
        <div className="App">
            <div>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/muscle-groups" element={<MGMain />} />
                        <Route path="/exercises" element={<ExerciseMain />} />
                        <Route path="/workouts" element={<WorkoutMain />} />
                        <Route path="/calendar" element={<CalendarPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
