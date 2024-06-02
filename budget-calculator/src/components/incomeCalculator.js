import React from 'react';

const IncomeCalculator =({ expenditures }) => {
    const calculateRequiredIncome =() => {
        const rentTotal = expenditures.filter(e => e.category === 'Rent')
            .reduce((acc,curr) => acc + parseFloat(curr.amount), 0);
            return rentTotal / 0.33;
    };

    return (
        <div>
            <h2 class="income-title">Required Monthly Income</h2>
            <div class="boxlayout">${calculateRequiredIncome().toFixed(2)}</div>
        </div>
    );
};

export default IncomeCalculator;






