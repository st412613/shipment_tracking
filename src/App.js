import React from 'react';
import ScrollToTopOnPageChange from './common/scrollToTop/ScrollToTop';
import Header from './components/header/Header';
import FooterBelow from './components/footerBelow/FooterBelow';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import OurServices from './pages/OurServices';
import ITServices from './pages/ITServices';
import PincodeTrack from './pages/PincodeTrack';
import TrackShipment from './pages/TrackShipment';
import CustomerLogin from './pages/CustomerLogin';
import TrackShipmentLRN from './pages/TrackShipmentLRN';

function App() {
  return (
    <>
      <Router>
        <ScrollToTopOnPageChange />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/services' element={<OurServices />} />
          <Route path='/services/IT-services' element={<ITServices />} />
          <Route path='/pincode-Tracking' element={<PincodeTrack />} />
          <Route path='/users/track-Your-Shipment' element={<TrackShipment />} />
          <Route path='/users/track-Your-Shipment-LRN' element={<TrackShipmentLRN />} />
          <Route path='/customer-login' element={<CustomerLogin />} />
        </Routes>
        <FooterBelow />
      </Router>
    </>
  );
}

export default App;
