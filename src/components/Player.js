import React from 'react';
import "./Player.css"

import Card from 'react-bootstrap/Card';

const Player = ({id, Photo, Name, Team, Nationality, JerseyNumber, Age}) => {
  return ( 
    <div className="center">
 <Card style={{ width: '38rem' }}>
        
<Card.Body>
      <Card.Img variant="top" src={Photo} />
      <Card.Title>{id}</Card.Title>
        <Card.Title>{Name}</Card.Title>
        <Card.Title>{Team}</Card.Title>
        <Card.Title>{Nationality}</Card.Title>
        <Card.Title>{JerseyNumber}</Card.Title>
        <Card.Title>{Age}</Card.Title>
        <Card.Text>
          He is a Professional Footballer.
        </Card.Text>
      </Card.Body>

      
    </Card>


              {/* {player.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.Photo} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.Name}</h2>
                      <h2>{val.Team}</h2>
                      <h2>{val.Nationality}</h2>
                      <h2>{val.JerseyNumber}</h2>
                      <h2>{val.Age}</h2>
                
                    </div>
                  </div>
                )
              })}
              

              

     */}
    </div>


  )
}

export default Player
