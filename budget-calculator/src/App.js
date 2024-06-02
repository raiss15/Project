
import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import ExpenditureTable from './components/expenditureTable';
import IncomeCalculator from './components/incomeCalculator';

function App() {
  const [expenditures, setExpenditures] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');

  const addExpenditure = (expenditure) => {
    setExpenditures([...expenditures, {...expenditure, id: expenditures.length + 1 }]);
  };

  return (
    <div className="App">
      <h1>Budget Calculator</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Form addExpenditure={addExpenditure} />
        <ExpenditureTable expenditures={expenditures} filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
        <IncomeCalculator expenditures={expenditures} />
      </div>
    </div>
  );
}

export default App;
