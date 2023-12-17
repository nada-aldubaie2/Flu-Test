import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
<>
      <Routes>
                        <Route path="/" element ={<Home/>} />
              <Route path="home" element ={<Home/>} />
              <Route path="about" element ={<About/>} />
          </Routes>
</>
  );
}

export default App;
