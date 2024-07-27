import React, { useContext } from 'react';
import { BudgetContext } from '../Context/BudgetContext';
import { useNavigate } from 'react-router-dom';
import styles from './UserInfo.module.css'; 

const UserInfo = () => {
  const { userInfo, setUserInfo } = useContext(BudgetContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/income-expenses');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={userInfo.name} onChange={handleChange} className={styles.inputField} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={userInfo.email} onChange={handleChange} className={styles.inputField} required />
      </div>
      <div>
        <label>Preferred Currency:</label>
        <select name="preferredCurrency" value={userInfo.preferredCurrency} onChange={handleChange} className={styles.inputField} required>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <button type="submit" className={styles.button}>Next</button>
    </form>
  );
};

export default UserInfo;
