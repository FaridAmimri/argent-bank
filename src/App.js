import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import { useDispatch } from 'react-redux'
import { updateToken } from './features/userSlice'

function App() {
  const dispatch = useDispatch()

  if (localStorage.getItem('token') !== null) {
    dispatch(updateToken({ token: localStorage.getItem('token') }))
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashbord"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
