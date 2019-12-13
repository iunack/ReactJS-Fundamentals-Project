import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const NotFoundPage = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 notFound">Page not found!</h1>
          <p className="lead notFound">Requested page was not found on our site. </p>
          <p className="lead"></p>
          <hr className="my-2" />
          <Button color="primary" onClick={()=>{props.history.push('/')}}>Go Home</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default NotFoundPage;