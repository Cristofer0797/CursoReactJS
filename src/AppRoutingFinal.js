import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';

function AppRoutingFinal() {

  let loggedIn = true;

  return (
   <Router>
      <Routes>
        {/* Redirections to protect our routes */}
        <Route exact path='/' element={loggedIn ?
          (<Navigate to='/dashboard'/>)
          :
          (<Navigate to='/login'/>)}
        />
        {/* Login route */}
        <Route exact path='/login' element={<LoginPage/>}/>
        {/* Dashboard route */}
        <Route exact path='/dashboard' element={loggedIn ?
          (<DashBoard/>)
          :
          (<Navigate to='/login'/>)}
        />
        {/* 404 Not Found */}
        <Route path='*' element={<NotFoundPage/>} replace/>
      </Routes>
   </Router>
  );
}

export default AppRoutingFinal;
