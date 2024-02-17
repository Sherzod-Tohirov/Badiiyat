import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { tokenContext } from './context/tokenContext'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Logout } from './pages/Logout'
import { Home } from './pages/Home'
import { Main } from './pages/Main/Main'
import { Books } from './pages/Books'
import { AboutAuthor } from './pages/AboutAuthor'
import { AboutBook } from './pages/AboutBook'
import { Profile } from './pages/Profile'
import { ProfileMain } from './pages/ProfileMain'
import { ProfileSecurity } from './pages/ProfileSecurity'
import { ProfileSettings } from './pages/ProfileSettings'
import { AddAuthor } from './pages/AddAuthor'
import { AddBook } from './pages/AddBook'
import { ToastContainer } from 'react-toastify'
import { themeContext } from './context/themeContext'
import { NotFound } from './pages/404/NotFound'


function App() {
  const {token} = useContext(tokenContext);
  const {theme} = useContext(themeContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
      if(!token) {
        if(location.pathname !== '/register') {
          navigate("/login");
        }
      }
  }, [token]);

  useEffect(() => {
    if(theme === 'dark') {
       document.body.classList.add('dark');
    }else {
      document.body.classList.remove('dark');
    }
}, [theme]);


  return (

   <>
      <Routes>
        <Route  path='/' element={<Home />} >
          <Route index element={<Main />} />
          <Route path='/books' element={<Books />} />
        </Route>
        <Route path='/profile/*' element={<Profile />}>
           <Route index element={<ProfileMain />} />
           <Route path='security' element={<ProfileSecurity />} />
           <Route path='settings' element={<ProfileSettings />} />
        </Route>
        <Route path='/addauthor' element={<AddAuthor />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/author/:id' element={<AboutAuthor />} />
        <Route path='/book/:id' element={<AboutBook />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
   </>
  )
}

export default App;
