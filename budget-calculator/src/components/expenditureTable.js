import React, {useState} from 'react';

function ExpenditureTable({expenditures}) {

    const categorries = ['All', 'Rent', 'Food', 'Utilities', 'Miscellaneous'];
    const [filterCategory, setFilterCategory] = useState('All');

    //Filter the expenditures based on the selected category
    const filteredExpenditures = filterCategory === 'All' ? expenditures : expenditures.filter(exp => exp.category === filterCategory);

    //Calculate the total expenditure for the selected category

    const filterTotal = FilterExpenditures.reduce((acc, exp) => acc + parsefloat (exp.amount), 0);

    //calculate total expenditure per category or overall depending on the selected filter
    const calculateTotals =() => {

        const totals = filterExpenditures.reduce((acc, exp) => {
            acc[exp.category] = (acc[exp.category] || 0) + parseFloat(exp.amount);  
            return acc;
        }, {});
        return Object.entries(totals).map(([category, total]) => ({category, total}));
    };

    const totalsToShow = calculateTotals();

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


       </div>
    );
}

export default ExpenditureTable;