import GpaCalculator from "./routes/GpaCalculator";
import CgpaCalc from "./routes/CgpaCalculator";
import Home from "./routes/Home";
import Reviews from "./routes/Reviews";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
   
   <>
   <Routes>
   <Route path="/" element={<Home/>} />
    <Route path="/gpa" element={<GpaCalculator/>} />
    <Route path="/cgpa" element={<CgpaCalc/>} />
    <Route path="/reviews" element={<Reviews/>} />
   </Routes>
   </>
  );
}

export default App;
