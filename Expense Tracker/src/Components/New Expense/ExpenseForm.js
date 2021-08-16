import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props)=>{
 
  const [enteredTitle, setEnteredTitle]= useState ('');
  const titleChangeHandler = (event)=>{
    setEnteredTitle (event.target.value);
  };

  const [enteredAmount, setEnteredAmount]= useState ('');
  const amountChangeHandler = (event)=>{
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate]= useState ('');
  const dateChangeHandler = (event)=>{
    setEnteredDate (event.target.value);
  };

  const submitHandler = (event)=> {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date (enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle ('');
    setEnteredAmount ('');
    setEnteredDate ('');
  };
  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__controls'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__controls'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__controls'>
          <label>Date</label>
          <input type='date' min='2021-01-01' max='2024-12-31' value={enteredDate} onChange={dateChangeHandler}  />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' className='btn'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;