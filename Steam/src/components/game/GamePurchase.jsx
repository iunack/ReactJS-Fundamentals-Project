import React, { useContext } from "react";
import { AuthContext } from "../contexts/ContextWrapper";
import { Redirect } from "react-router-dom";
import gameService from "../../services/game-services";
import notify from "../../services/notify";

const GamePurchase = props => {
  const id = props.match.params.id;
  const { userId, setDlGames, amount, setAmount } = useContext(AuthContext);

  gameService.get(id).then(game =>{
      if(game.data.price > amount) {
        const diff = game.data.price - amount;
        notify.warning(`You need ${diff}$ more to purchase ${game.data.title}!`);
        props.history.push(`/game/${id}`)
        return ;
      }
      gameService.purchase(id, userId).then(res => {
        setDlGames(dlg => (dlg ? [...dlg, res.data.game._id] : [res.data.game._id]));
        console.log(res.data);
        
        setAmount(Number(amount) - Number(res.data.game.price));
        notify.success(`Congats! You Purchased { ${res.data.game.title} } game!`);
        // props.history.push("/");
      }).catch(err =>{
        notify.warning("You have not enough money to purchase this game!")
      });
  }).catch(err =>{
    notify.error("There is no game!")
  });

  

  return <Redirect to={`/`} />;
};

export default GamePurchase;
