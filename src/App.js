import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomePage from "./pages/HomePage/HomePage";
import NewHikePage from "./pages/NewHikePage/NewHikePage";
import MyHikes from "./pages/MyHikes/MyHikes";
import MyMap from "./pages/MyMap/MyMap";

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/nuevo" element={<NewHikePage/>}/>
            <Route path="/mis-excursiones" element={<MyHikes/>}/>
            <Route path="/mis-mapa" element={<MyMap/>}/>
            <Route path="*" element={<HomePage/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
