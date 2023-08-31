import GpaCalculator from "./routes/GpaCalculator";
import CgpaCalc from "./routes/CgpaCalc";
import Home from "./routes/Home";
import ReviewsPage from "./routes/ReviewsPage";
import { Routes,Route } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
   
   <>
   <Routes> 
   <Route path="/" element={<Home/>} />
    <Route path="/gpa" element={<GpaCalculator/>} />
    <Route path="/cgpa" element={<CgpaCalc/>} />
    <Route path="/reviews" element={<ReviewsPage/>} />
   </Routes>
   </>
  );
}

export default App;
