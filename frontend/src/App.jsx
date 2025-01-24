import './App.css'
import Navbar from './components/Navbar';
import Login from './auth/Login';
import SignIn from './auth/SignIn';
import { BrowserRouter } from 'react-router';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Welcome from './components/Welcome';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Navbar/>} >
            <Route index element={<SignIn />} />
            <Route path="signin"  element={<SignIn/>} />
            <Route path="login"  element={<Login/>} />
            <Route path="welcome"  element={<Welcome/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
