import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Typography>
          <img className="headerImage" src="logo.png" alt="Tic-Tac-Toe" />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          gutterBottom
          variant={isSmallScreen ? "h6" : "h4"}
          sx={{ color: "white", fontWeight: "800" }}
        >
          TIC-TAC-TOE
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
