import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RegisterForm} from "./components/RegisterForm";
import {LoginForm} from "./components/LoginForm";
import {MyCalendar} from "./components/MyCalendar";

function App() {
  return (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/calendar" element={<MyCalendar/>}/>
      </Routes>
    </Router>
    
  </div>    
  );
}   

export default App;
