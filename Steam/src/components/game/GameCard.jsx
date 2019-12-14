import React, { useContext } from "react";
import { AuthContext } from "../../components/contexts/ContextWrapper"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  Col,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const GameCard = props => {
    const { userId } = useContext(AuthContext)
  const isUploader = props.uploader._id === userId;
    
  const detailsClickHandler = () => {
        
  }
  
  const editClickHandler = () => {
      
}
const deleteClickHandler = () => {
      
}

  return (
    <Col sm="3">
      <Card style={{ marginBottom: 28, color: "black"}}>
        <CardBody>
          <CardTitle style={{fontWeight:600, fontSize: 30}}>{props.title}</CardTitle>
          <CardSubtitle>uploader: {props.uploader.username}</CardSubtitle>
        </CardBody>
        <img width="180px" src="/logo512.png" alt="Card image cap" />
        <CardBody>
          <CardText>
            {props.description}
          </CardText>
          <Button onClick={detailsClickHandler} color="success">Details</Button>
          {isUploader ? <Button onClick={editClickHandler} color="warning">Edit</Button> : null}
          {isUploader ? <Button onClick={deleteClickHandler} color="danger">Delete</Button> : null}
        </CardBody>
      </Card>
    </Col>
  );
};

export default GameCard;
