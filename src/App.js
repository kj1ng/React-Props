
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Name from './components/Name'
import Price from './components/Price'
import Description from './components/Description'
import Image from './components/Image'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const App = () => {

  let firstName = "Adekunle";
  
return(
    <div className = "App">

<div className = "container">
  <div className ="row">
  <>
    <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/7317722/1.jpg?5539" />
      <Card.Body>
        <Card.Title>Product For s
          Sale
        </Card.Title>
        <Card.Text>
        <Name/>
     <Price/>
     <Description/>
     <Image/>
        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
    </>
   
    <>
    <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/7317722/1.jpg?5539" />
      <Card.Body>
        <Card.Title>Product For s
          Sale
        </Card.Title>
        <Card.Text>
        <Name/>
     <Price/>
     <Description/>
     <Image/>
        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
    </>
   
    <>
    <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/7317722/1.jpg?5539" />
      <Card.Body>
        <Card.Title>Product For s
          Sale
        </Card.Title>
        <Card.Text>
        <Name/>
     <Price/>
     <Description/>
     <Image/>
        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
    </>
   
   <p>Hello {firstName} welcome</p>

  </div>
</div>
      </div>
)
}

export default App;