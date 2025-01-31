import './App.css';
import Nav from "./Components/Nav";
import Footer from './Components/Footer';
// for navigation
import { Route, Routes } from 'react-router';
import Homepage from './Components/Home/Homepage';
import AboutUs from './Components/Pages/AboutUs';
import Menu from './Components/Pages/Menu';
import Booking from './Components/Pages/ReserveTable/Booking';
import ConfirmedBooking from './Components/Pages/ReserveTable/ConfirmedBooking ';
import OrderOnline from './Components/Pages/OrderOnline';
import Login from './Components/Pages/Login';


function App() {
  return (
    <>
      <Nav/>
      {/* Routes for navigation */}
      <Routes>
          <Route path="/little-lemon" element={<Homepage/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/book-a-table" element={<Booking/>}/>
          <Route path="/confirmed-booking" element={<ConfirmedBooking/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/order-online" element={<OrderOnline/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        {/* End of Routes for navigation */}
      <Footer/>
    </>
  );
}

export default App;

