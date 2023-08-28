import React from 'react';
import { playerData } from '../player'
import Player from './components/Player'
// import Card from 'react-bootstrap/Card';

const PlayerList = () => {
  return (
    <div>
 {
  playerData.map(baller=>{
   return(
    <Player Photo={baller.Photo} Name={baller.Name} Team={baller.Team} Nationality={baller.Nationality} JerseyNumber={baller.JerseyNumber} Age={baller.Age} />
  
    // <Card.Body>
    // <Card.Img variant="top" src={baller.Photo} />
    //   <Card.Title>{baller.Name}</Card.Title>
    //   <Card.Title>{baller.Team}</Card.Title>
    //   <Card.Title>{baller.Nationality}</Card.Title>
    //   <Card.Title>{baller.JerseyNumber}</Card.Title>
    //   <Card.Title>{baller.Age}</Card.Title>
    //   <Card.Text>
    //     He is a professoinal footballer.
    //   </Card.Text>
    // </Card.Body>  )
   )
  })
 }

{/* 
</Card> */}

    </div>


  )
}

export default PlayerList
