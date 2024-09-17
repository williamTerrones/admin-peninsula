import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Import from "./pages/import";
import { Login } from "./pages/login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [token, setToken] = useState('')

  useEffect(() => {

    setToken(localStorage.getItem('token') || '')

  }, [])

  return (
    <>
      <ToastContainer />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={token ? <Home /> : <Login />} />
          <Route path="/import" element={ token ? <Import /> : <Login />  } />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
