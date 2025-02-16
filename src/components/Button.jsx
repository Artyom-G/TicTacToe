import React, { useState } from "react";
import "./Button.css";

const Button = ({ symbol, row, column, makeMove, isWinningCell }) => {
    return(
        <button className={`grid-button ${symbol!==" " && !isWinningCell ? `grid-button-${symbol}` : 'grid-button-empty'} grid-button-${symbol}-${isWinningCell}`}  onClick={() => { makeMove(row, column); }} disabled={isWinningCell}>
            <span>{symbol}</span>
        </button>
    );
}

export default Button;
