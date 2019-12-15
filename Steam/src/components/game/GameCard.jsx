import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../components/contexts/ContextWrapper";
import {
  Card,
  CardBody,
  Col,
  Button,
  CardHeader,
  CardFooter
} from "reactstrap";
import { Link } from "react-router-dom";
import userService from "../../services/user-service";

const GameCard = props => {
  const { userId } = useContext(AuthContext);
  const id = props.uploader._id || props.upId;
  const isUploader = id === userId;
  const [name, setName] = useState(props.uploader.username);
  
  useEffect(()=>{
    userService.get(id).then(res=>{
      setName(res.data.username);
    }).catch(err=>console.log(err))
  })

  return (
    <Col sm="3">
      <Card style={{ marginBottom: 28, color: "black" }}>
        <CardBody>
          <CardHeader style={{ fontWeight: 600, fontSize: 30 }}>
            {props.title}
          </CardHeader>
          <span>Uploader: </span>
          <Link to={"/user/" + id}>{name}</Link>
        </CardBody>
        <img
          width="100%"
          src={props.image}
          alt="Card image cap"
        />
        <CardBody>
          <CardFooter style={{ fontSize: 23 }}>Price: {props.price} $</CardFooter>
          <CardFooter>{props.description}</CardFooter>
          <Link className="btn btn-success" to={"/game/" + props._id}>
            Details{" "}
          </Link>
          {isUploader ? (
            <Link className="btn btn-warning" to={"/game/edit/" + props._id}>
              Edit{" "}
            </Link>
          ) : null}
          {isUploader ? (
            <Button
              onClick={() =>
                props.deleteClickHandler({ id: props._id, title: props.title })
              }
              color="danger"
            >
              Delete
            </Button>
          ) : null}
        </CardBody>
      </Card>
    </Col>
  );
};

export default GameCard;
