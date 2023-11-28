import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Player = ({ name, symbol, changeName }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEdit, setIsEdit] = useState(false);

  function handleEdit() {
    if (isEdit) {
      if (playerName) setIsEdit(false);
      else alert("Enter a valid name!!");
    } else {
      setIsEdit(true);
    }

    if(isEdit) {
      changeName(symbol, playerName);
    }
  }

  return (
    <>
      <TextField
        value={playerName}
        variant="outlined"
        size="small"
        component="h2"
        onChange={(e) => {
          setPlayerName(e.target.value.toUpperCase());
        }}
        sx={{
          marginLeft: "20px",
          justifyContent: "center",
          width: "max-content",
        }}
        InputProps={{
          readOnly: isEdit ? false : true,
          style: { color: "white" },
        }}
      />
      <Typography
        variant="h6"
        component="h2"
        sx={{ marginLeft: "auto", justifyContent: "center", color: "white" }}
      >
        {symbol}
      </Typography>

      <Box sx={{ marginLeft: "auto" }}>
        <Button
          sx={{
            "&:hover": {
              backgroundColor: "red",
            },
            color: "white",
          }}
          variant="outlined"
          size="small"
          onClick={handleEdit}
        >
          {isEdit ? "Save" : "Edit"}
        </Button>
      </Box>
    </>
  );
};

export default Player;
