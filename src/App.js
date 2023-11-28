import { useState } from "react";
import Header from "./components/Header.jsx";
import PlayerBoard from "./components/playerBoard/PlayerBoard.jsx";
import GameBoard from "./components/gameBoard/GameBoard.jsx";
import LogBoard from "./components/logBoard/LogBoard.jsx";
import { Container, Grid, Box } from "@mui/material";
import WiningCombinations from "./components/gameBoard/WiningCombinations.js";
import "./App.css";
import GameOver from "./components/GameOver.jsx";

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "PLAYER 1",
  O: "PLAYER 2",
};

function getGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAMEBOARD.map((innerArray) => [...innerArray])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function getActivePlayer(turns) {
  let currentActivePlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentActivePlayer = "O";
  }

  return currentActivePlayer;
}

function getWinner(gameBoard, playersName) {
  let winner;

  for (const combination of WiningCombinations) {
    const firstBoxSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondBoxSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdBoxSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstBoxSymbol &&
      firstBoxSymbol === secondBoxSymbol &&
      firstBoxSymbol === thirdBoxSymbol
    ) {
      winner = playersName[firstBoxSymbol];
    }
  }
  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playersName, setPlayersName] = useState(PLAYERS);

  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = getGameBoard(gameTurns);

  const winner = getWinner(gameBoard, playersName);
  let hasDraw = gameTurns.length === 9 && !winner;

  function handleClickSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = getActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayersName((prevPlayersName) => {
      return { ...prevPlayersName, [symbol]: newName };
    });
  }

  return (
    <Container className="App">
      <Header />
      {!winner && !hasDraw && (
        <Box>
          <Grid container justifyContent="center">
            <PlayerBoard
              isActive={activePlayer}
              players={playersName}
              changeName={handlePlayerNameChange}
            />
            <GameBoard
              onSelectSquare={handleClickSquare}
              gameBoard={gameBoard}
            />
          </Grid>
        </Box>
      )}
      <Box>
        {(winner || hasDraw) && (
          <GameOver winner={winner} reset={handleRematch} />
        )}
      </Box>
      <LogBoard turns={gameTurns} />
    </Container>
  );
}

export default App;
