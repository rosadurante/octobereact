import { useState, useMemo, useEffect } from "react";
import { Button } from "../components/button";

type Board = (string | null)[][];

const initialBoard: Board = [
  [null, null, null],
  [null, null, null], 
  [null, null, null],
]

const WINNING_COMBINATIONS = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[0, 2], [1, 1], [2, 0]]
];

export type Turn = {
  player: string;
  row: number;
  col: number;
}

export const TicTacToe = () => {

  const [players, setPlayers] = useState<string>("X");
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const gameBoard = [...initialBoard.map((row) => [...row])];

  // Set the game board with all turns gamed.
  gameTurns.map((turn) => {
    gameBoard[turn.row][turn.col] = turn.player;
  });

  const _isWinner = useMemo(() => {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const combination = WINNING_COMBINATIONS[i];
      if (gameBoard[combination[0][0]][combination[0][1]] ===
        gameBoard[combination[1][0]][combination[1][1]] &&
        gameBoard[combination[1][0]][combination[1][1]] ===
        gameBoard[combination[2][0]][combination[2][1]] &&
        gameBoard[combination[0][0]][combination[0][1]] !== null) {
        return true;
      }
    }
    return false;
    // Only recalculate if the gameTurns has updated.
  }, [gameTurns]);

  const _isFinished = useMemo(() => {
    return gameTurns.length === 9;
    // Only recalculate if the gameTurns has updated.
  }, [gameTurns]);

  const _handleTurn = (row: number, col: number) => {
    // Update a new turn in the list of turns.
    setGameTurns([{ player: players, row, col }, ...gameTurns]);
  }

  // Update the result based on the game turns.
  useEffect(() => {
    if (_isWinner) {
      setResult(players === "X" ? "X wins !!" : "O wins!!");
    } else if (_isFinished) {
      setResult("Game Over - Draw");
    } else {
      // Next Turn
      setPlayers(players === "X" ? "O" : "X");
    }
    // Only recalculate if the gameTurns has updated.
  }, [gameTurns]);

  const _handleReset = () => {
    setGameTurns([]);
    setResult(null);
    setPlayers("X");
  }

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      {result ?
        <div className="flex flex-row gap-2 items-center">
          <div className="text-2xl font-bold">{result}</div>
          <Button label="New Game" onClick={() => _handleReset()} />
        </div> :
        <div className="text-2xl font-bold">Playing {players} turn</div>
      }

        <div className=" h-full grid grid-cols-3 justify-center items-center gap-2 bg-[#333]">
        {gameBoard.map((row, rowIndex) => {
        return row.map((symbol, colIndex) => {
          return (
            <div key={colIndex} className="w-32 h-16 bg-[#eee] flex items-center justify-center text-2xl font-bold">
              {symbol ? <div>{symbol}</div> : (
                <button onClick={() => _handleTurn(rowIndex, colIndex)} disabled={!!symbol || _isWinner || _isFinished} className="w-32 h-16"></button>
            )}
              </div>
          )
        })
      })} 
      </div>
    </div>
  )
}
