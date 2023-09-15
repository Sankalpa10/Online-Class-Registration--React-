import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import technology from '../Assets/image/technology.jpg'
import science from '../Assets/image/science.avif'
import commerce from '../Assets/image/commerce.jpg'
import art from '../Assets/image/art.jpg'






function KitchenSinkExample() {
  return (
    <div className='d-flex'>
    <Card style={{ width: '18rem' }} className='m-5'>
    <Card.Img variant="top" src={technology} />
      <Card.Body>
        <Card.Title>Technology</Card.Title>
        <Card.Text>
         GCE Advaced Level
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Science For Technology</ListGroup.Item>
        <ListGroup.Item>Engeneering Technology</ListGroup.Item>
        <ListGroup.Item>Bio System Technology</ListGroup.Item>
        <ListGroup.Item>Information and Comunication Technology</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/viewteachersT">View Teachers</Card.Link>
        <Card.Link href="/joinclass">Join Class</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='m-5'>
    <Card.Img variant="top" src={science} />
      <Card.Body>
        <Card.Title>Science</Card.Title>
        <Card.Text>
        GCE Advaced Level
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Biology</ListGroup.Item>
        <ListGroup.Item>Physics</ListGroup.Item>
        <ListGroup.Item>Chemestry</ListGroup.Item>
        <ListGroup.Item>Combined Maths</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/viewteachersS">View Teachers</Card.Link>
        <Card.Link href="/joinclass">Join Class</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='m-5'>
    <Card.Img variant="top" src={commerce} />
      <Card.Body>
        <Card.Title>Commerce</Card.Title>
        <Card.Text>
        GCE Advaced Level
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Business Studeis</ListGroup.Item>
        <ListGroup.Item>Accounting</ListGroup.Item>
        <ListGroup.Item>Economics</ListGroup.Item>
        <ListGroup.Item>Business Statistics</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/viewteachersC">View Teachers</Card.Link>
        <Card.Link href="/joinclass">Join Class</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className='m-5'>
    <Card.Img variant="top" src={art} />
      <Card.Body>
        <Card.Title>Art</Card.Title>
        <Card.Text>
        GCE Advaced Level
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Languages</ListGroup.Item>
        <ListGroup.Item>History</ListGroup.Item>
        <ListGroup.Item>Political</ListGroup.Item>
        <ListGroup.Item>Media</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/viewteachersA">View Teacher</Card.Link>
        <Card.Link href="/joinclass">Join Class</Card.Link>
      </Card.Body>
    </Card>
    
    </div>
  );
}

export default KitchenSinkExample;