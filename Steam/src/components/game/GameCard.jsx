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
  Button,
  CardHeader,
  CardFooter
} from "reactstrap";
import { Link } from "react-router-dom";


const GameCard = props => {
    const { userId } = useContext(AuthContext)
  const isUploader = props.uploader._id === userId;
    
  return (
    <Col sm="3">
      <Card style={{ marginBottom: 28, color: "black"}}>
        <CardBody>
          <CardHeader style={{fontWeight:600, fontSize: 30}}>{props.title}</CardHeader>
          <span>Uploader: </span><Link to={"/user/" + props.uploader._id}>{props.uploader.username}</Link>
        </CardBody>
        <img width="100%" src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg" alt="Card image cap" />
        <CardBody>
        <CardFooter style={{fontSize:23}}>
           Price: {props.price}
          </CardFooter>
          <CardFooter>
            {props.description}
          </CardFooter>
          <Link className='btn btn-success' to={"/game/" + props._id}>Details </Link>
          {isUploader ?  <Link className='btn btn-warning' to={"/game/edit/" + props._id}>Edit </Link> : null}
          {isUploader ? <Button onClick={()=>props.deleteClickHandler({id : props._id, title : props.title})} color="danger">Delete</Button> : null}
        </CardBody>
      </Card>
    </Col>
  );
};

export default GameCard;
