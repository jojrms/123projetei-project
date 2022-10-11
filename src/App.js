import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './components/General.css'

import Login from './components/Login/Login';
import './components/Login/Login.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
      </div> 
    </BrowserRouter>
    
  );
}

export default App;
