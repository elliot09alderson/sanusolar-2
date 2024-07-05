import React from 'react'
// import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import ContactUs from './pages/ContactUs'
import Greencard from './pages/Greencard'
import Clients from './pages/Clients'
import Services from './pages/Services'
import Para from './pages/Para'
import Footer from './pages/Footer'



function App() {
  return (
    <div>
      {/* <Nav/> */}
      <Home />
      <About />
      <Team />
      <ContactUs />
      <Clients />
      <Greencard />
      <Para />
      <Services />

      <Footer />
    </div>
  );
}

export default App
