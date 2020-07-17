import React from 'react';
import './App.css';
// import { Moode_changing } from './components/Moode_changing'
import { Navbar } from './components/Navbar'
// import { InfoPanel } from './components/InfoPanel'
// import { FootNav } from './components/FootNav'
// f6f938a6f13330320073c3d9d5940c7e
import { AllCountries } from './components/AllCountries'
function App() {
  // const screenConfig = React.useState(0);
  return (
    <div className="body">
       {/* <Moode_changing/> */}
       <Navbar/>
       <AllCountries/>
       {/* <InfoPanel currentScreen={screenConfig[0]}/>
       <FootNav  screenConfig={screenConfig}/> */}
    </div>

  );
}

export default App;
