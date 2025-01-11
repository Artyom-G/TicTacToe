import React, { useState } from "react";
import "./Grid.css";

const Grid = () => {

    const [grid, setGrid] = useState([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);
    const [player, setPlayer] = useState("X");

    const makeMove = (r, c) => {
        if(grid[r][c] === " "){
            grid[r][c] = player;
            setGrid(grid);
            setPlayer(player === "X" ? "O" : "X"); 
        }
    }

    const ValidateWin = () => {
        
    }

    return(
        <div className="grid">
            {grid.map((row, rowIndex) => {
                console.log(row);
                return(
                    <div className="grid-row" key={rowIndex}>
                        {row.map((item, columnIndex) => {
                            return(
                                <button className="grid-button" key={columnIndex} onClick={() => { makeMove(rowIndex, columnIndex); }}>
                                    <span>{item}</span>
                                </button>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Grid;
