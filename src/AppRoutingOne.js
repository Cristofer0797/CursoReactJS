import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import LoginPage from './pages/auth/LoginPage';

function AppRoutingOne() {

  const logged = false;

  return (
    <Router>

      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |  FAQs |</Link>
          <Link to='/any404'>| Not Found Page |</Link>
          <Link to='/login'>| Login</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route path='/login' element={
              logged ?
              (<Navigate to='/'/>)
              :
              (<LoginPage/>)
            }/>
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/profile' element={
              logged ?
              (<ProfilePage/>)
              :  
              (<Navigate to='/login'/>)
            }/>
            <Route path='/tasks' element={<TasksPage/>}/>

            {/* 404 Not Found */}
            <Route path='*' element={<NotFoundPage/>} replace/>
          </Routes>
        </main>
      </div>

      
    </Router>
  );
}

export default AppRoutingOne;
