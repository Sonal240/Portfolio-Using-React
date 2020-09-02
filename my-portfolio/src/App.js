import React from 'react';
import LandingComp from './Components/Home.js'
import AboutMe from './Components/About.js'
import MyPro from './Components/Projects.js'
import ContactMe from './Components/Contact.js'


function App() {
  return (
    <div className="App">
     
      <LandingComp/>
      <AboutMe/>
      <MyPro/>
      <ContactMe/>
    </div>
  );
}

export default App;
