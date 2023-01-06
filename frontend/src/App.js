import React from 'react';
import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import FetchComponent from './Components/FetchComponent';
import DataComponent from './Components/DataComponent';

function App() {
  const [countryName, setCountryName] = useState("")
  return (
    <div className="App">
      <FetchComponent onChangeName={setCountryName}/>
      <DataComponent countryName={countryName} />
    </div>
  );
}

export default App;
