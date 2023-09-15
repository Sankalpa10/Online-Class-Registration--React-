import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../Assets/image/class1l.png" />
      <Card.Body>
        <Card.Title>2023 Theory</Card.Title>
        <Card.Text>
          1 week 
        </Card.Text>
        <Button variant="primary" href='https://drive.google.com/file/d/1vrIxQ4TEaR-2FSz2KSoC7yolbPa9rRb_/view?usp=drivesdk'>Watch Video</Button>
      </Card.Body>
      <container> 
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="../Assets/image/class1l.png" />
    <Card.Body>
      <Card.Title>2023 Theory</Card.Title>
      <Card.Text>
        2 week
      </Card.Text>
      <Button variant="primary" href='https://drive.google.com/file/d/1vmNABSWbwKqP2Y75YrJdRM4n7goFV4Cm/view?usp=drivesdk'>Watch Video</Button>
    </Card.Body>
  </Card>
  </container>
    </Card>
   
  );
}

export default BasicExample;