import React, { useState } from "react";
import "./PlayerTurnText.css";

const PlayerTurnText = ({ player, isEnd }) => {

    return(
        <span className={`player-turn-text ${player!==" " ? `player-turn-text-${player}` : 'player-turn-text-inactive'}`}>
            {!isEnd ? `${player}'s Turn!`: `${player} Won!`}
        </span>
    );
}

export default PlayerTurnText;
