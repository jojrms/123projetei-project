import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './components/General.css'

import Login from './components/Login/Login';
import DashboardInitial from './components/Dashboard Initial/DashboardInitial';
import { AuthProvider } from './context/auth';
import useAuth from './hooks/useAuth';
import EditUser from './components/Dashboard Initial/Edit User/EditUser';

const Private = ({ Item }) => {
  const signed = false;
  return signed > 0 ? <DashboardInitial/> : <Login/>
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="*" element={<Login/>}/>
              <Route path="/DashboardInitial" element={<DashboardInitial/>}/>
              <Route path="/DashboardInitial/edit-user/:id" element={<EditUser/>}/>
              <Route path="/DashboardInitial/create-user/:id" element={<DashboardInitial/>}/>
          </Routes>
        </div> 
      </BrowserRouter>  
    </AuthProvider>
    
    
  );
}

export default App;
