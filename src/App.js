import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BudgetProvider } from '../src/Context/BudgetContext';
import BudgetSummary from './Components/BudgetSummary';
import UserInfo from './Components/UserInfo';
import IncomeExpenses from './Components/IncomeExpenses';
import ReviewSave from './Components/ReviewSave';


const App = () => {
  return (
    <BudgetProvider>
      <Router>
        <Routes>
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/income-expenses" element={<IncomeExpenses />} />
          <Route path="/budget-summary" element={<BudgetSummary />} />
          <Route path="/review-save" element={<ReviewSave />} />
          <Route path="/" element={<UserInfo />} /> 
        </Routes>
      </Router>
    </BudgetProvider>
  );
};
export default App;
