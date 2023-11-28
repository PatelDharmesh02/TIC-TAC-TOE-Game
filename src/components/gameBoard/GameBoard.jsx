import { Box, Stack } from "@mui/material";
import CustomButton from "./CustomButton";

const GameBoard = ({ onSelectSquare, gameBoard }) => {

  return (
    <Box
      variant="outlined"
      margin="20px"
      sx={{ backgroundColor: "white", borderRadius: "10px", padding: "20px" }}
    >
      <Stack spacing={{ xs: 1, sm: 2 }}>
        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 4 }}
          justifyContent="center"
        >
          <CustomButton onClick={() => onSelectSquare(0, 0)} >
            {gameBoard[0][0]}
          </CustomButton>

          <CustomButton onClick={() => onSelectSquare(0, 1)}>
            {gameBoard[0][1]}
          </CustomButton>

          <CustomButton onClick={() => onSelectSquare(0, 2)}>
            {gameBoard[0][2]}
          </CustomButton>
        </Stack>

        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 4 }}
          justifyContent="center"
        >
          <CustomButton onClick={() => onSelectSquare(1, 0)}>
            {gameBoard[1][0]}
          </CustomButton>

          <CustomButton onClick={() => onSelectSquare(1, 1)}>
            {gameBoard[1][1]}
          </CustomButton>

          <CustomButton onClick={() => onSelectSquare(1, 2)}>
            {gameBoard[1][2]}
          </CustomButton>
        </Stack>

        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 4 }}
          justifyContent="center"
        >
          <CustomButton onClick={() => onSelectSquare(2, 0)}>
            {gameBoard[2][0]}
          </CustomButton>

          <CustomButton onClick={() => onSelectSquare(2, 1)}>
            {gameBoard[2][1]}
          </CustomButton>

          <CustomButton onClick={() => onSelectSquare(2, 2)}>
            {gameBoard[2][2]}
          </CustomButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GameBoard;
