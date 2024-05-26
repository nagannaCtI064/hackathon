import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Login';
import RegisterForm from './Registration';
import HomePage from './Homepage';
import Gallery from './Gallary';
import EventList from './Event';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
         <Route path='/'element={<HomePage/>}/>
         <Route path='/gallery'element={<Gallery/>}/>
         <Route path='/eventlist'element={<EventList/>}/>
         <Route path='/aboutus'element={<AboutUs/>}/>
         <Route path='/contact'element={<ContactUs/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
