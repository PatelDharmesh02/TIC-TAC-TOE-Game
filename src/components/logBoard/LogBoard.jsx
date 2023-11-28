import { Box, Typography } from "@mui/material";

export default function LogBoard({ turns }) {
  return (
    <Box
      variant="outlined"
      color="yellow"
      sx={{ padding: "20px", margin: "auto" }}
    >
      <Typography sx={{ color: "white", fontSize: "35px", fontWeight: '700' }}>
        Game Logs:
      </Typography>
      {turns.map((log) => {
        const { square, player } = log;
        return (
          <Typography variant="h6" key={`${square.row}${square.col}`} sx={{fontWeight: '700', fontSize: '25px'}}>
            {`${player} Selected [${square.row + 1},${square.col + 1}]`}
          </Typography>
        );
      })}
    </Box>
  );
}
