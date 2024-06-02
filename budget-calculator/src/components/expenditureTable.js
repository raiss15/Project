import React, {useState} from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'

function ExpenditureTable({ expenditures }) {
    const categories = ['All', 'Rent', 'Food', 'Utilities', 'Entertainment', 'Miscellaneous'];

    const [filterCategory, setFilterCategory] = useState('All');

    // Filter expenditures based on the selected category
    const filteredExpenditures = filterCategory === 'All' ? expenditures : expenditures.filter(exp => exp.category === filterCategory);
                
    // Calculate the total expenditure for the selected category
    const filteredTotal = filteredExpenditures.reduce((acc, exp) => acc + parseFloat(exp.amount), 0);

    // Calculate total expenditures per category or overall depending on the selected filter
    const calculateTotals = () => {
        const totals = filteredExpenditures.reduce((acc, exp) => {
            acc[exp.category] = (acc[exp.category] || 0) + parseFloat(exp.amount);
            return acc;
        }, {});
        return Object.entries(totals).map(([category, total]) => ({ category, total }));
    };

    //Prepare chart data based on filtered expenditures
    const calculateChartData = () => {
        const totals = filteredExpenditures.reduce((acc, exp) =>{
            acc [exp.category] = (acc[exp.category] || 0) + parseFloat(exp.amount);
            return acc;
        }, {});

        return{
            lables: Object.keys(totals),
            datasets: [
                {
                    data: Object.values(totals),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0']
                }
            ]
        };
        };
    

     const totalsToShow = calculateTotals();
     const chartData = calculateChartData();

     return (
        <div>
            <h2 className="expenses-title">Expenses</h2>
           
            <select name="category" value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>

            <table>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Item Name</th>
                        <th>Amount</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExpenditures.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>${item.amount}</td>
                            <td>{item.category}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {totalsToShow.map(({ category, total }) => (
                        <tr key={category} style={{ display: filterCategory === 'All' || filterCategory === category ? '' : 'none' }}>
                            <th colSpan="3">Total for {category}</th>
                            <th>${total.toFixed(2)}</th>
                        </tr>
                    ))}
                    <tr style={{ display: filterCategory === 'All' ? '' : 'none' }}>
                        <th colSpan="3">Total for All</th>
                        <th>${filteredTotal.toFixed(2)}</th>
                    </tr>
                </tfoot>
            </table>
                    {filteredExpenditures.length > 0 && (
                        <div className="piechart">
                            <h3>Expennditure Breakdown for {filterCategory === 'All' ? 'All Categories' : filterCategory}</h3>
                            <Pie data={chartData} />
                        </div>
                    )}
       </div>
    );
}

export default ExpenditureTable;