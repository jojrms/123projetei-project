import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './components/General.css'

import Login from './components/Login/Login';
import DashboardInitial from './components/Dashboard Initial/DashboardInitial';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/DashboardInitial" element={<DashboardInitial/>}/>
        </Routes>
      </div> 
    </BrowserRouter>
    
  );
}

export default App;
