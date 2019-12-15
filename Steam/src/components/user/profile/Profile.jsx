import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  CardFooter,
  Row
} from "reactstrap";
import GameCard from "../../game/GameCard";
import userService from "../../../services/user-service";
import GrowingSpinner from "../../Spinner/GrowingSpinner";

function Profile(props) {
  const id = props.match.params.id;
  const [username, setUsername] = useState(null);
  const [upl, setUpl] = useState(null);
  const [dwl, setDwl] = useState(null);
  const [uCount, setUCount] = useState(0);
  const [dCount, setDCount] = useState(0);
  const [upClick, setUpClick] = useState(false);
  const deleteClickHandler = (id) => {console.log(id)};

  useEffect(() => {
    userService.get(id).then(res => {
      setUsername(res.data.username);
      setUpl(res.data.upgames);
      setDwl(res.data.downgames);
      setUCount(res.data.upgames.length);
      setDCount(res.data.downgames.length);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      {username ? (
        <Card style={{ marginBottom: 28, color: "black" }}>
          <CardBody>
            <CardHeader style={{ fontWeight: 600, fontSize: 30 }}>
              {username}
            </CardHeader>
          </CardBody>
          <img width="100%" src="/avatar.png" alt="Card image cap" />
          <CardBody>
            <CardFooter style={{ fontSize: 43 }}>
              Uploaded: {uCount} *********************** Downloaded: {dCount}{" "}
            </CardFooter>

            <Button color="success" onClick={() => setUpClick(!upClick)}>
              Show Games of master {username}
            </Button>
            <CardFooter style={{ textAlign: "center", fontSize: 30 }}>
              Uploaded games
            </CardFooter>
            {upClick ? (
              upl ? (
                <Row>
                  {" "}
                  {upl.map(game => (
                    <GameCard
                      deleteClickHandler={()=>{}}
                      key={game._id}
                      upId={game.uploader}
                      {...game}
                    />
                  ))}
                </Row>
              ) : (
                <CardFooter>NO UPLOADED GAMES WAS FOUND!</CardFooter>
              )
            ) : null}

            <CardFooter style={{ textAlign: "center", fontSize: 30 }}>
              Purchased games
            </CardFooter>
            {upClick ? (
              dwl ? (
                <Row>
                  {" "}
                  {dwl.map(game => (
                    <GameCard
                      key={game._id}
                      deleteClickHandler={()=>{}}
                      upId={game.uploader}
                      {...game}
                    />
                  ))}
                </Row>
              ) : (
                <CardFooter>NO PURCHASED GAMES WAS FOUND!</CardFooter>
              )
            ) : null}
          </CardBody>
        </Card>
      ) : (
        <GrowingSpinner />
      )}
    </div>
  );
}
export default Profile;
