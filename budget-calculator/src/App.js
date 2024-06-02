import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import ExpenditureTable from './components/expenditureTable';

function App() {
  const [expenditures, setExpenditures] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');

  // const addExpenditure = (expenditure) => {
  //   setExpenditures([...expenditures, id: expenditures.length + 1 ]);
  // };

  return (

    <div className="App">
      <h1>Budget Calculator</h1>
      <div style={{display: 'flex', flexDirection: 'column', alignItems:"center"}}>
      <Form addExpenditure={addExpenditure} />
      <ExpenditureTable expenditures={expenditures} filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
      </div>
    </div>
  );
}

export default App;