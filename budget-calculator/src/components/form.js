import React, { useState } from 'react';

const categories = ['Rent', 'Food', 'Utilities', 'Entertainment', 'Miscellaneous'];

function Form({ addExpenditure }) {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: 'Rent'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addExpenditure(formData);
    setFormData({ name: '', amount: '', category: 'Rent' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleInputChange}
        required
      />
      <select name="category" value={formData.category} onChange={handleInputChange}>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Add Expenditure</button>
    </form>
  );
}

export default Form;
