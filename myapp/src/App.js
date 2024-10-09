import { useState } from "react";


export default function App() {

const [game,setGame] = useState({
  id : 1,
  player:{
    name: "MIK",
  },
});

const handleClick = () =>
{
  setGame({...game,player:{...game.player,name: 'MAX'}})
}


  return (
        <div>
          <h1>Game Info:</h1>
          <p>Game ID {game.id}</p>
          <p>Player Name {game.player.name}</p>
          
          <button onClick={handleClick}>change</button>
        </div>
   
   );
  
}
