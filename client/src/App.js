import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RegisterForm} from "./components/RegisterForm";
import {LoginForm} from "./components/LoginForm";
import {Calendar} from "./components/Calendar";

function App() {
  return (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
      </Routes>
    </Router>
    
  </div>    
  );
}   

export default App;
