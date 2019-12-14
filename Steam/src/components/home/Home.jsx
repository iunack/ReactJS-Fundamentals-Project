import React, { useState, useEffect, useContext } from "react";
import { Row } from "reactstrap";
import GameCard from "../game/GameCard";
import GrowingSpinner from "../../components/Spinner/GrowingSpinner";
import gameService from "../../services/game-services";

function Home(props) {
  const [games, setGames] = useState(null);

  useEffect(() => {
    gameService.all().then(games => {
      setGames(Object.values(games.data));
    });
  }, []);

  return (
    <div> { games ? 
      <Row>
        {games.map(game => (
          <GameCard key={game._id} {...game}/>
        ))}
      </Row> : <GrowingSpinner /> }
    </div>
  );
}

export default Home;
