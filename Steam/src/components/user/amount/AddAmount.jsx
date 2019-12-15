import React, { useState, useContext, useEffect } from "react";
import userService from "../../../services/user-service";
import { AuthContext } from "../../contexts/ContextWrapper";
import notify from "../../../services/notify";

const AddAmount = props => {
  const [money, setMoney] = useState(0);
  const { userId, amount, setAmount, uplGames } = useContext(AuthContext);
  console.log(userId);
  
  const changeMoney = e => {
    setMoney(e.target.value);
  };
  console.log(uplGames);

  const onClickHandler = e => {
    e.preventDefault();
    const newAmount = Number(amount) + Number(money);
    userService
      .addMoney(userId, { amount: newAmount })
      .then(res => {
        setAmount(newAmount);
        console.log(res);
        notify.info(`${money} $ was added in to your balance! Enjoy gaming!`);
        props.history.push("/");
      })
      .catch(err => notify.error(err));
  };

  return (
    <div>
      Add money today, spend money tomorow!
      <input type="number" onChange={changeMoney} value={money} />
      <button onClick={onClickHandler}>Add Money</button>
    </div>
  );
};

export default AddAmount;
