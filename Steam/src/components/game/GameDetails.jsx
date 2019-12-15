import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/contexts/ContextWrapper";
import gameServices from "../../services/game-services";
import GrowingSpinner from "../../components/Spinner/GrowingSpinner";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  Col,
  CardTitle,
  CardSubtitle,
  Button,
  CardHeader,
  CardFooter
} from "reactstrap";
import { Link } from "react-router-dom";
import notify from "../../services/notify";

const GameDetails = props => {
  const { userId, uplGames, dlGames, setUplGames } = useContext(AuthContext);
  const [game, setGame] = useState(null);
  const [isUploader, setIsUploader] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  const deleteClickHandler = () => {
    gameServices
      .delete(game._id)
      .then(res => {
        setUplGames(uplGames.filter(x => x != game._id.toString()));
        notify.success(`${game.title} was removed successfuly!`);
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const id = props.match.params.id;
    gameServices.get(id).then(game => {
      console.log(game.data);
      console.log(game.data.date);

      setGame(game.data);
      setIsUploader(game.data.uploader._id === userId);

      setIsPurchased(dlGames ? dlGames.indexOf(id) !== -1 : false);
    });
  }, []);

  return (
    <Col>
      {game ? (
        <Card style={{ marginBottom: 28, color: "black" }}>
          <CardBody>
            <CardHeader style={{ fontWeight: 600, fontSize: 30 }}>
              {game.title}
            </CardHeader>
            <span>Uploader: </span>
            <Link to={"/user/" + game.uploader._id}>
              {game.uploader.username}
            </Link>
          </CardBody>
          <img
            width="100%"
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
            alt="Card image cap"
          />
          <CardBody>
            <CardFooter>{game.description}</CardFooter>
            <CardFooter>Platform: {game.platform}</CardFooter>
            <CardFooter>Genre: {game.genre}</CardFooter>
            {!isUploader && !isPurchased ? (
              <CardFooter style={{ fontSize: 44 }}>
                Purchase today only for: {game.price} $
              </CardFooter>
            ) : null}
            <CardFooter>
              Uploaded on: {new Date(game.date).toLocaleString()}
            </CardFooter>
            {isUploader ? (
              <Link className="btn btn-warning" to={"/game/edit" + game._id}>
                Edit{" "}
              </Link>
            ) : null}
            {isUploader ? (
              <Button onClick={deleteClickHandler} color="danger">
                Delete
              </Button>
            ) : null}
            {!isUploader && !isPurchased ? (
              <Link
                className="btn btn-warning"
                to={"/game/purchase/" + game._id}
              >
                Purchase{" "}
              </Link>
            ) : null}
            {isPurchased ? (
              <Link className="btn btn-info" to={"/game/play/" + game._id}>
                Play{" "}
              </Link>
            ) : null}
          </CardBody>
        </Card>
      ) : (
        <GrowingSpinner />
      )}
    </Col>
  );
};

export default GameDetails;
