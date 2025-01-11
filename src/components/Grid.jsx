import React, { useState } from "react";
import Button from "./Button";
import PlayerTurnText from "./PlayerTurnText";
import "./Grid.css";

const Grid = () => {

    const [grid, setGrid] = useState([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);
    const [player, setPlayer] = useState("X");
    const [isEnd, setIsEnd] = useState(false);
    const [winningCells, setWinningCells] = useState([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);

    const makeMove = (r, c) => {
        if(grid[r][c] === " "){
            grid[r][c] = player;
            setGrid(grid);
            
            if(ValidateWin(player)){
                setIsEnd(true);
                console.log(winningCells);
                return;
            }
            
            setPlayer(player === "X" ? "O" : "X"); 
        }
    }

    const ValidateWin = (player) => {
        // Rows
        for (let i = 0; i < 3; i++) {
            if (grid[i][0] === player && grid[i][1] === player && grid[i][2] === player) {
                for(let j = 0; j < 3; j++) winningCells[i][j] = player;
                setWinningCells(winningCells);
                return true; 
            }
        }
        // Columns
        for (let i = 0; i < 3; i++) {
            if (grid[0][i] === player && grid[1][i] === player && grid[2][i] === player) {
                for(let j = 0; j < 3; j++) winningCells[j][i] = player;
                setWinningCells(winningCells);
                return true;
            }
        }
        // Top Left Diagonal 
        if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) {
            for(let j = 0; j < 3; j++) winningCells[j][j] = player;
            setWinningCells(winningCells);
            return true; 
        }
        // Top Right Diagonal 
        if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) {
            for(let j = 0; j < 3; j++) winningCells[2-j][j] = player;
            setWinningCells(winningCells);
            return true;
        }
        // No Win
        return false; 
    };

    return(
        <div className="grid-wrapper">
            <div className="grid">
                {grid.map((row, rowIndex) => {
                    return(
                        <div className="grid-row" key={rowIndex}>
                            {row.map((item, columnIndex) => {
                                return(
                                    <Button 
                                        key={columnIndex} 
                                        symbol={item} 
                                        row={rowIndex} 
                                        column={columnIndex} 
                                        makeMove={makeMove} 
                                        isWinningCell={isEnd && winningCells[rowIndex][columnIndex]}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <PlayerTurnText player={player} isEnd={isEnd}/>
        </div>
    );
}

export default Grid;
