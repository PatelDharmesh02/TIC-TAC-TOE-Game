import React from "react";
import { Grid, Box } from "@mui/material";
import Player from "./Player";

const PlayerBoard = ({ isActive, changeName, players }) => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={6} xs={12}>
        <Box
          className={isActive === "X" ? "active" : undefined}
          sx={{
            display: "flex",
            backgroundColor: "black",
            p: "20px",
            color: "black",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <Player symbol="X" name={players.X} changeName={changeName} />
        </Box>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Box
          className={isActive === "O" ? "active" : undefined}
          sx={{
            display: "flex",
            backgroundColor: "black",
            p: "20px",
            color: "black",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <Player symbol="O" name={players.O} changeName={changeName} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PlayerBoard;
