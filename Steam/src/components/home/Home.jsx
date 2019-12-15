import React, { useState, useEffect, useContext } from "react";
import { Row } from "reactstrap";
import GameCard from "../game/GameCard";
import GrowingSpinner from "../../components/Spinner/GrowingSpinner";
import gameService from "../../services/game-services";
import notify from "../../services/notify";
import { AuthContext } from "../contexts/ContextWrapper";

function Home(props) {
  const {uplGames ,setUplGames } = useContext(AuthContext);
  const [games, setGames] = useState(null);

  const deleteClickHandler = ({ id, title }) => {
    gameService
      .delete(id)
      .then(res => {
        setUplGames(uplGames.filter(x => x != id.toString()));
        notify.success(`${title} was removed successfuly!`);
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    gameService.all().then(games => {
      setGames(Object.values(games.data));
    });
  }, [games]);

  return (
    <div>
      {" "}
      {games ? (
        <Row>
          {games.map(game => (
            <GameCard
              key={game._id}
              deleteClickHandler={deleteClickHandler}
              {...game}
            />
          ))}
        </Row>
      ) : (
        <GrowingSpinner />
      )}
    </div>
  );
}

export default Home;
