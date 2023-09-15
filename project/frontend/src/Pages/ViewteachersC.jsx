import {  Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import t1 from '../Assets/image/t1.png';

    function KitchenSinkExample() {
      return (
        <div className='d-flex'>
        <Card style={{ width: '18rem' }} className='m-5'>
        <Card.Img variant="top" src={t1} />
          <Card.Body>
            <Card.Title>Udeshika Adhikari</Card.Title>
            <Card.Text>
            Science For Technology
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button variant="primary" href="/video">Watch Video</Button><br></br><br></br>
            <Button variant="primary" href="/payment">Pay Now</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='m-5'>
        <Card.Img variant="top" src={t1} />
          <Card.Body>
            <Card.Title>Shamalka Lakshi</Card.Title>
            <Card.Text>
            Engeneering Technology
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button variant="primary" href="/video">Watch Video</Button><br></br><br></br>
            <Button variant="primary" href="/payment">Pay Now</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='m-5'>
        <Card.Img variant="top" src={t1} />
          <Card.Body>
            <Card.Title>Kethaka Ranasinghe</Card.Title>
            <Card.Text>
            Information Technology
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button variant="primary" href="/video">Watch Video</Button><br></br><br></br>
            <Button variant="primary" href="/payment">Pay Now</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='m-5'>
        <Card.Img variant="top" src={t1} />
          <Card.Body>
            <Card.Title>Kavindya Sathsarani</Card.Title>
            <Card.Text>
            Bio System Technology
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button variant="primary" href="/video">Watch Video</Button><br></br><br></br>
            <Button variant="primary" href="/payment">Pay Now</Button>
          </Card.Body>
        </Card>
        </div>
  
  );
}

export default KitchenSinkExample;