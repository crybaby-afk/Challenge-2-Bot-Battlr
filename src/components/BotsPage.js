import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((res)=> res.json())
    .then((data)=> setBots(data))
    .catch((error) => console.error('Error fetching bots:', error));
  }, [])

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots}/>
    </div>
  )
}

export default BotsPage;
