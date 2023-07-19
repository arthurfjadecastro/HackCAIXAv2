import React, { useEffect } from "react";
import { Button, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  width: "70%",
  maxWidth: 196,
  textTransform: "capitalize",
  height: 40,
  background: "#F39200",
  boxShadow:
    "0px 3px 3px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: 20,
  color: "white",
  "&:disabled": {
    backgroundColor: "white",
  },
  "&:hover": {
    backgroundColor: orange[800],
  },
}));

const DefaultButton = ({
  handlePageChange,
  isContinueButtonEnabled,
  buttonTitle,
  page,
  setClose,
}) => {
  const handleClick = () => {
    if (page === 5) {
      setClose(false);
    } else {
      handlePageChange();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && isContinueButtonEnabled) {
      event.preventDefault();
      handleClick();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClick, handleKeyDown, isContinueButtonEnabled]);

  return (
    <React.Fragment>
      <ColorButton onClick={handleClick} disabled={!isContinueButtonEnabled}>
        {buttonTitle}
      </ColorButton>
    </React.Fragment>
  );
};

export default DefaultButton;
