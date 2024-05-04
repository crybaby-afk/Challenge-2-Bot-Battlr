import React from "react";
import BotArmyCard from "./BotArmyCard";

function YourBotArmy({ botsArmy, onRelease }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {botsArmy && botsArmy.map((bot) => (
            <BotArmyCard key={bot.id} bot={bot} onRelease={onRelease} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
