import React from 'react';
import { playerData } from '../player'
import Player from './Player'
// import Card from 'react-bootstrap/Card';

const PlayerList = () => {
  return (
    <div>
 {
  playerData.map((baller, key)=>{
   return(
    <Player key={baller.id}  {...baller} />
  
   )
  })
 }



    </div>


  )
}

export default PlayerList
