import React, { useState } from "react";
import "./Button.css";

const Button = ({ symbol, row, column, makeMove }) => {
    return(
        <button className={`grid-button ${symbol!==" " ? `grid-button-${symbol}` : 'grid-button-inactive'}`}  onClick={() => { makeMove(row, column); }}>
            <span>{symbol}</span>
        </button>
    );
}

export default Button;
