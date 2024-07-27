import React, { createContext, useState, useEffect } from 'react';

const BudgetContext = createContext();


const BudgetProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    preferredCurrency: 'USD',
  });
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});


  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    const storedIncome = localStorage.getItem('income');
    const storedExpenses = localStorage.getItem('expenses');
    const storedExchangeRates = localStorage.getItem('exchangeRates');

    if (storedUserInfo) setUserInfo(JSON.parse(storedUserInfo));
    if (storedIncome) setIncome(Number(storedIncome));
    if (storedExpenses) setExpenses(JSON.parse(storedExpenses));
    if (storedExchangeRates) setExchangeRates(JSON.parse(storedExchangeRates));
  }, []);

  
  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('income', income.toString());
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('exchangeRates', JSON.stringify(exchangeRates));
  }, [userInfo, income, expenses, exchangeRates]);

  const AllValues = {
    userInfo,
    setUserInfo,
    income,
    setIncome,
    expenses,
    setExpenses,
    exchangeRates,
    setExchangeRates,
  };

  return (
    <BudgetContext.Provider value={AllValues}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
