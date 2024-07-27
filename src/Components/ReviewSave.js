import React, { useContext } from 'react';
import { BudgetContext } from '../Context/BudgetContext';
import { useNavigate } from 'react-router-dom';

const ReviewSave = () => {
  const { userInfo, income, expenses } = useContext(BudgetContext);
  const navigate = useNavigate(); 

  const handleBack = (step) => {
    navigate(step); 
  };

  const handleSave = () => {
    alert("Budget saved successfully!");
  };

  return (
    <div>
      <h2>Review and Save </h2>
      <div>
        <h3>User Info</h3>
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <p>Preferred Currency: {userInfo.preferredCurrency}</p>
        <button onClick={() => handleBack('/user-info')}>Edit</button>
      </div>
      <div>
        <h3>Income and Expenses</h3>
        <p>Monthly Income: {income}</p>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense.name}: {expense.amount}</li>
          ))}
        </ul>
        <button onClick={() => handleBack('/income-expenses')}>Edit</button>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ReviewSave;
