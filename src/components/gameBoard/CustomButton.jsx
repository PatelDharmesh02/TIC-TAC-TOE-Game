import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ onClick, children }) => {
  return (
    <Button
      variant="outlined"
      disableRipple
      disabled={children !== null}
      sx={{
        width: "60px",
        height: "60px",
        color: "black",
        fontSize: "40px",
        fontWeight: "800",
        borderColor: "black",

        "&.Mui-disabled": {
          color: "black",
          fontSize: "40px",
          fontWeight: "800",
          borderColor: "black",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
