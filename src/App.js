
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


const App = () => {
return(
    <div className = "App">
        {/* Navbar */}
    <>
      <Navbar bg="dark" data-bs-theme="dark">
    
        <Container>
          <Navbar.Brand href="#home">React Checkpoint</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    <>
    {/* Header Fragment */}
    <br/> <br/> <br/>
    <h1 className = "text-center">Welcome to my React Pratice Boilerplate</h1>
    <br/> <br/> <br/>
    
    
    

    </>
    <div className = "container">
      <div className = "row">
    {/* Page Cards */}
    <>
    <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Card.Body>
        <Card.Title>HTML & CSS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
    <>
    <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&w=600holder.js/100px180" />
      <Card.Body>
        <Card.Title>Javascript</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">React</Button>
      </Card.Body>
    </Card>
    </>
    <>
    <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=600holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </>
    </div>
    </div>
      </div>
)
}

export default App;