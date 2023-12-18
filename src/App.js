import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomePage from "./pages/HomePage/HomePage";
import NewHikePage from "./pages/NewHikePage/NewHikePage";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/mis-hikes" element={<HomePage/>}/>
                    <Route path="/nuevo" element={<NewHikePage/>}/>
                    <Route path="/informes" element={<ReportsPage/>}/>
                    <Route path="/explorar" element={<ExplorePage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
