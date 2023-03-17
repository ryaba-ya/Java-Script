import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample(props) {
  return (
    <Card className='row' >
      <Card.Img className='col-md-4 img-fluid' variant="top" src={props.url} />
      <Card.Body className='col-md-8'>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
  
    </Card>
  );
}

export default KitchenSinkExample;