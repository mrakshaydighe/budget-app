import React, { useContext, useState, useEffect } from 'react';
import { BudgetContext } from '../Context/BudgetContext';
import axios from 'axios';
import styles from './BudgetSummary.module.css'; 
const BudgetSummary = () => {
  const { income, expenses, exchangeRates } = useContext(BudgetContext);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [currency, setCurrency] = useState('USD'); 
  const [totalIncome, setTotalIncome] = useState(income);
  const [totalExpenses, setTotalExpenses] = useState(expenses.reduce((acc, exp) => acc + exp.amount, 0));

  useEffect(() => {
    setTotalIncome(income);
    setTotalExpenses(expenses.reduce((acc, exp) => acc + exp.amount, 0));
    setRemainingBudget(income - totalExpenses);
  }, [income, expenses]);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
      } catch (error) {
        console.error('Error fetching exchange rates', error);
      }
    };

    fetchExchangeRates();
  }, []);

  const handleRefresh = () => {
    // i will add this later
  };

  return (
    <div className={styles.summaryContainer}>
      <h1>Budget Summary</h1>
      <div className={styles.totalSection}>
        <h2>Total Income:</h2>
        <p>{currency} {totalIncome.toFixed(2)}</p>
      </div>
      <div className={styles.totalSection}>
        <h2>Total Expenses:</h2>
        <p>{currency} {totalExpenses.toFixed(2)}</p>
      </div>
      <div className={styles.totalSection}>
        <h2>Remaining Budget:</h2>
        <p>{currency} {remainingBudget.toFixed(2)}</p>
      </div>
      <button onClick={handleRefresh} className={styles.refreshButton}>Refresh Data</button>
    </div>
  );
};

export default BudgetSummary;
