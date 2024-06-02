import React, { useState } from 'react';
import './App.css';
import Form from './components/form';


function App() {
  const [expenditures, setExpenditures] = useState([]);
 

  return (

    <div className="App">
      <h1>Budget Calculator</h1>
      <div style={{display: 'flex', flexDirection: 'column', alignItems:"center"}}>
      <Form addExpenditure={addExpenditure} />
      </div>
    </div>
  );
}

export default App;