import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots && bots.map((bot)=> (
          <BotCard bot={bot}/>
        ))}
        Collection of all bots
      </div>
      
    </div>
  );
}

export default BotCollection;
