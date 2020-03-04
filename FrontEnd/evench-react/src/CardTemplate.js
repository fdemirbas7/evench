import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './grid.css'


var CardTemplate = () => {
  return(
    <div className="cardTemp">
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="festival.jpg" />
    <Card.Body>
      <Card.Title>Kuşadası Gençlik Festivali</Card.Title>
      <Card.Text>
        8-12 Temmuz tarihleri arasında...
      </Card.Text>
      <Button variant="primary">Daha fazla</Button>
    </Card.Body>
   </Card>
    </div>
   );
}


export default CardTemplate;
 