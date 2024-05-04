import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botsArmy, setBotsArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  // Function to release a bot from the army
function handleRelease(botIdToRelease) {
  const updatedList = botsArmy.filter((bot)=> bot.id !== botIdToRelease)
  setBotsArmy(updatedList)
}

  return (
    <div>
      <YourBotArmy botsArmy={botsArmy} onRelease={handleRelease} />
      <BotCollection bots={bots} botsArmy={botsArmy} setBotsArmy={setBotsArmy} />
    </div>
  );
}

export default BotsPage;
