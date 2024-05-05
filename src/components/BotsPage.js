import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botsArmy, setBotsArmy] = useState([]);
  const [onDelete, setOnDelete] = useState(false);

  useEffect(() => {

    // Load bots army from local storage
    const storedBotsArmy = JSON.parse(localStorage.getItem("botsArmy")) || [];
    setBotsArmy(storedBotsArmy);

    fetch("https://challenge-2-bot-battlr.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, [onDelete]);

  // Function to release a bot from the army
  function handleRelease(botIdToRelease) {
    const updatedList = botsArmy.filter((bot) => bot.id !== botIdToRelease);
    setBotsArmy(updatedList);

    // Save updated bots army to local storage
    localStorage.setItem("botsArmy", JSON.stringify(updatedList));
  }

  return (
    <div>
      <YourBotArmy botsArmy={botsArmy} onRelease={handleRelease} />
      <BotCollection
        bots={bots}
        botsArmy={botsArmy}
        setBotsArmy={setBotsArmy}
        onDelete={onDelete}
        setOnDelete={setOnDelete}
      />
    </div>
  );
}

export default BotsPage;
