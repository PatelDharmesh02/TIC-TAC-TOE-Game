import { Box, Button, Typography, keyframes } from "@mui/material";

const popUpAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const GameOver = ({ winner, reset }) => {
  return (
    <Box
      variant="outlined"
      margin="20px"
      sx={{
        backgroundColor: "black",
        borderRadius: "10px",
        padding: "20px",
        animation: `${popUpAnimation} 0.3s ease-out forwards`,
        opacity: 0.8,
      }}
    >
      <Typography
        variant="h4"
        margin="10px"
        padding="20px"
        sx={{ color: "white" }}
      >
        Game Over!!
      </Typography>
      <Typography variant="body" sx={{ fontSize: 20, color: "white" }}>
        {winner ? `${winner} won!` : "Match Draw!"}
      </Typography>
      <Typography sx={{ color: "white" }}>
        <Button variant="contained" onClick={reset} sx={{ opacity: 1 }}>
          Rematch!
        </Button>
      </Typography>
    </Box>
  );
};

export default GameOver;
