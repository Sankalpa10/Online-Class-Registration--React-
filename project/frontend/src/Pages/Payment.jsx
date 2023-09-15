import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from 'react-bootstrap';
import onlinepay from '../Assets/image/onlinepay.gif';
import manualpay from '../Assets/image/manualpay.gif';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom'

const quick_link=[
  {
    path:'/paynow', display:'Paynow'
  },
]



export default function ActionAreaCard() {


  return (
    <>
    <section>
      <Container className='d-flex'>
      
    <Card sx={{ maxWidth: 345 }} className='m-4'>
    <CardActionArea>
      <CardMedia
        src = {manualpay}
        component="img"
        height="240"
        width="400"
        
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pay Manual
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You can pay the amount of class fee or monthly fee to the bank and upload your slip photo for us.
          Use our whatsapp number to send photo or contact for any issue.
        </Typography>
        <Stack direction="row" className='p-5'>
      <Button variant="contained"  href="https://call.whatsapp.com/video/MXZKkfQ0QXDGFHshuL8zoR">
        Send
      </Button>
    </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
   <Card sx={{ maxWidth: 345 }} className='m-4'>
    <CardActionArea>
      <CardMedia
        src = {onlinepay}
        component="img"
        height="240"
        width="400"
        
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pay Online 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You can pay your fees by online transactions.Please fill the form and do the transaction.
          Kindly remember type the registration number for transaction reason.
          
        </Typography>
        <Stack spacing={2} direction="row" className='p-5'>
        <Link to={'/paynow'}><Button variant="contained" >Pay Now

  
</Button></Link>
      </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
  </Container>
  </section>
  <section>
    <Container>
    
    </Container>
  </section>
  </>
      
  

  );
}