import {  Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import t1 from '../Assets/image/t1.png';

    function KitchenSinkExample() {
      return (
        <div className='d-flex'>
        <Card style={{ width: '18rem' }} className='m-5'>
        <Card.Img variant="top" src={t1} />
          <Card.Body>
            <Card.Title>Sandunisha Sithumini</Card.Title>
            <Card.Text>
            Biology
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
            <Card.Title>Taniya Anjali</Card.Title>
            <Card.Text>
            Physics
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
            <Card.Title>Wathsala Sithari</Card.Title>
            <Card.Text>
            Chemestry
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
            <Card.Title>Gihan Shirantha</Card.Title>
            <Card.Text>
            Combined Maths
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