import "./App.css";
import NavBar from "./Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MGMain from "./Muscle-Groups/MGMain";
import MainPage from "./MainPage";

function App() {
    return (
        <div className="App">
            <div>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/muscle-groups" element={<MGMain />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
