import { useContext } from "react";
import userContext from "./context";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import React from "react";
import "./Allpages.css"


export default function Deposit() {
  let user = useContext(userContext);
  let len=[user.users.length]
  let [currbalance, setCurrbalance] = useState(user.users[len-1].balance);
  let [deposit, setDeposit] = useState(0);
  const [inputValue, setInputValue] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log("deposit", deposit);
    setCurrbalance(Number(currbalance)+ Number(deposit));
    setInputValue(e.target.value);
    setIsButtonDisabled(true);
    setMessage(`Deposit of Rs.${deposit} successful.`);
    }

  function handleDepositChange(e) {
    setDeposit(e.target.value);
    setIsButtonDisabled(e.target.value === '' || e.target.value <= 0);

    e.preventDefault();
if (isNaN(deposit) || deposit <= 0) {
alert("Please enter a valid amount(positive amount).");
}
  }

  user.users[len-1].balance = currbalance;

  return (
    <div className="color" >
      
      <div className="login">
    <Card className="form">
      <center>
        <form onSubmit={handleSubmit}>
          <h3>DEPOSIT</h3>
          <hr/>
        <h5>Balance: {currbalance}</h5>
        <hr/>
          <input type="number" placeholder= 'Enter the Amount' value={inputValue} onChange={handleDepositChange} />
          <input type="submit"  disabled={isButtonDisabled} value="Deposit" />
        </form>
        {message && <p>{message}</p>}
      </center>
    </Card>
    </div>
    </div>
  );
}
