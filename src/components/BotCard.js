import React, { useEffect } from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, botsArmy, setBotsArmy, onDelete, setOnDelete }) {
  useEffect(() => {
    // Load bots army from local storage on component mount
    const storedBotsArmy = JSON.parse(localStorage.getItem("botsArmy")) || [];
    setBotsArmy(storedBotsArmy);
  }, []);
  
// Adding bot to army
function handleAddArmy(bot) {
  // Check if the bot is already in the army
  const botExists = botsArmy.some((armyBot) => armyBot.id === bot.id);
  
  // If the bot doesn't exist in the army, add it and update local storage
  if (!botExists) {
      setBotsArmy([...botsArmy, bot]);
      localStorage.setItem("botsArmy", JSON.stringify([...botsArmy, bot]));
    } 
  else {
    console.log("Bot already exists in the army");
    }
}


  // Deleting bot
  function handleDelete(id) {
    fetch(`http://localhost:8002/bots/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        alert("Deleted Successfully");
        setOnDelete(!onDelete);
      });
  }

  return (
    <div className="ui column">
      <div className="ui card">
        <div key={bot.id} onClick={() => handleAddArmy(bot)}>
          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {bot.name}
              <i className={botTypeClasses[bot.bot_class]} />
            </div>
            <div className="meta text-wrap">
              <small>{bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {bot.health}
            </span>
            <span>
              <i className="icon lightning" />
              {bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {bot.armor}
            </span>
          </div>
        </div>
        <div className="ui center aligned segment basic">
          <button
            className="ui mini red button"
            onClick={() => handleDelete(bot.id)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
