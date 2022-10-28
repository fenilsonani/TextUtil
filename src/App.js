import './App.css';
import Navbar from './comp/Navbar.js';
import Form from './comp/Form.js';
import About from './comp/About.js';
import React, { useState } from 'react'
import Alert from './comp/Alert';
import {
  BrowserRouter as Router,
  toggleMode,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlerts = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }
      , 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlerts("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlerts("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <div className="App">
      <>
        <Router>
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={togglemode} />
          <Alert alert={alert} />
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<Form data="Enter Data" mode={mode} showAlerts={showAlerts} />}>
            </Route>
          </Routes>
        </Router>
      </>
    </div >
  );
}
export default App;