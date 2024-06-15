import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Userdata from './components/Userdata';

function App() {
  const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 2000);
  // }

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar></Navbar>
          <div >
            <Alert alert={alert}></Alert>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Userdata" element={<Userdata showAlert={showAlert} />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login showAlert={showAlert} />} />
                <Route path="/signup" element={<Signup showAlert={showAlert} />} />
              </Routes>
            </div>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
