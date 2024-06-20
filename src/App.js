import Navbar from "./Component/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import SearchPage from "./Pages/SearchPage/SearchPage";
import MyBookings from "./Pages/MyBookings/MyBookings";
import Frequent from "./Component/Frequent/Frequent";
import Download from "./Component/Download/Download";
import Footer from "./Component/Footer/Footer";


function App() {
  return (
    <div className="App">
       <Router>
     <Navbar />
       
       <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/search" element={<SearchPage/>} />
         <Route path="/mybookings" element={<MyBookings/>} />
         {/* Define other routes that you need*/}
       </Routes>
    <Frequent/>
    <Download/>
    <Footer/>
   </Router>
     
     
    </div>
  );
}

export default App;
