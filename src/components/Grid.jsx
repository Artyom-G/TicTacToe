import React, { useState } from "react";
import Button from "./Button";
import "./Grid.css";

const Grid = () => {

    const [grid, setGrid] = useState([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);
    const [player, setPlayer] = useState("X");

    const makeMove = (r, c) => {
        if(grid[r][c] === " "){
            grid[r][c] = player;
            setGrid(grid);
            
            if(ValidateWin(player)){
                console.log(player, " Won!");    
            }
            
            setPlayer(player === "X" ? "O" : "X"); 
        }
    }

    const ValidateWin = (player) => {
        // Rows
        for (let i = 0; i < 3; i++) {
            if (grid[i][0] === player && grid[i][1] === player && grid[i][2] === player) {
                return true; 
            }
        }
        // Columns
        for (let i = 0; i < 3; i++) {
            if (grid[0][i] === player && grid[1][i] === player && grid[2][i] === player) {
                return true;
            }
        }
        // Top Left Diagonal 
        if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) {
            return true; 
        }
        // Top Right Diagonal 
        if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) {
            return true;
        }
        // No Win
        return false; 
    };

    return(
        <div className="grid">
            {grid.map((row, rowIndex) => {
                return(
                    <div className="grid-row" key={rowIndex}>
                        {row.map((item, columnIndex) => {
                            return(
                                <Button key={columnIndex} symbol={item} row={rowIndex} column={columnIndex} makeMove={makeMove}/>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Grid;
