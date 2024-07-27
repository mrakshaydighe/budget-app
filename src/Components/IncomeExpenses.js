
import React, { useContext, useState } from 'react';

import { BudgetContext } from '../Context/BudgetContext';
import { useNavigate } from 'react-router-dom';
import styles from './IncomeExpenses.module.css'; 

const IncomeExpenses = () => {
  const { income, setIncome, expenses, setExpenses } = useContext(BudgetContext);
  const navigate = useNavigate();
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleIncomeChange = (e) => {
    setIncome(Number(e.target.value));
  };

  const handleExpenseNameChange = (e) => {
    setExpenseName(e.target.value);
  };

  const handleExpenseAmountChange = (e) => {
    setExpenseAmount(Number(e.target.value));
  };

  const addExpense = () => {
    setExpenses((prev) => [...prev, { name: expenseName, amount: expenseAmount }]);
    setExpenseName('');
    setExpenseAmount('');
  };

  const removeExpense = (index) => {
    setExpenses((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/budget-summary');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.fieldGroup}>
        <label>Monthly Income:</label>
        <input
          type="number"
          value={income}
          onChange={handleIncomeChange}
          required
        />
      </div>
      <div className={styles.fieldGroup}>
        <label>Expenses:</label>
        {expenses.map((expense, index) => (
          <div key={index} className={styles.expenseItem}>
            <span>{expense.name}: {expense.amount}</span>
            <button
              type="button"
              onClick={() => removeExpense(index)}
              className={styles.removeButton}
            >
              Remove
            </button>
          </div>
        ))}
        <input
          type="text"
          value={expenseName}
          onChange={handleExpenseNameChange}
          placeholder="Expense Name"
          className={styles.fieldGroup}
        />
        <input
          type="number"
          value={expenseAmount}
          onChange={handleExpenseAmountChange}
          placeholder="Expense Amount"
          className={styles.fieldGroup}
        />
        <button
          type="button"
          onClick={addExpense}
          className={styles.addButton}
        >
          Add Expense
        </button>
      </div>
      <button
        type="submit"
        className={styles.submitButton}
      >
        Next
      </button>
    </form>
  );
};

export default IncomeExpenses;
