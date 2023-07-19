import React, { useEffect, useReducer, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { RenderIf } from "../../../Utils";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
// import { Box, Grid } from "@mui/material";
import Questionnaire  from "./Questionnaire";
import { isNonEmptyString } from "../../UI/Inputs/Validations/Base";
// import axios from "axios";
// import { useMatchesSmartphone } from "../Breakpoints";
// import { Item } from "../Frames";

// import { RenderIf } from "../Utils";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Initial state to user info
const initialState = {
  creditOption: "",
  agreementOption: "",
  monetaryValue: "",
};

// Manage states of user information in a more organized and modular way
const reducer = (state, action) => {
  switch (action.type) {
    case "creditOption":
      return { ...state, creditOption: action.payload };
    case "agreementOption":
      return { ...state, agreementOption: action.payload };
    case "monetaryValue":
      return { ...state, monetaryValue: action.payload };
    case "resetState":
      return initialState;
    default:
      return state;
  }
};


function TakeLoan({ isOpen, setClose }) {
  // State that stores the request data
//   const [responses, setResponses] = useState();

  // State created to store processed data
//   const [ETLData, setEtlData] = useState();

  // State that iterates the simulation result by type
//   const newIterableData = {};

  // Create reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Create state page of Questionnaire
  const [page, setPage] = useState(1);

  // Action to reset Questionnaire
  const resetState = () => ({
    type: "resetState",
  });

//   const [activeStep, setActiveStep] = React.useState(0);

//   const resetInstallments = () => ({
//     type: "resetInstallments",
//   });

  // Effect to Reset form
  useEffect(() => {
    setPage(1);
    dispatch(resetState());
    // setShowAllInstallments(false);
    // setActiveStep(0);
  }, [isOpen === false]);

  // Effect that iterates over request response
//   useEffect(() => {
//     if (responses !== null && responses !== undefined) {
//       const newEtlData = {};
  
//       Object.keys(responses).forEach((prazo) => {
//         const resultadoSimulacao = responses[prazo].resultadoSimulacao;
//         resultadoSimulacao.forEach((item) => {
//           if (!newEtlData[item.tipo]) {
//             newEtlData[item.tipo] = {};
//           }
//           newEtlData[item.tipo][prazo] = item.parcelas;
//         });
//       });
  
//       setEtlData(newEtlData);

  
     
//     }
//   }, [responses]);

//   useEffect(() => {
//     setResponses(undefined);
//   }, [page < 3]);

//   const [showAllInstallments, setShowAllInstallments] = useState(false);

//   const handleShowAllInstallments = () => {
//     setShowAllInstallments(!showAllInstallments);
//   };

  

//   const isMobile = useMatchesSmartphone();

//   const makeRequest = (prazo) => {
//     const numericValue = parseInt(
//       state.monetaryValue.replace(/[^0-9.-]+/g, "").replace(".", ""),
//       10
//     );
  
//     return axios.post("https://apphackaixades.azurewebsites.net/api/Simulacao", {
//       valorDesejado: numericValue,
//       prazo: prazo,
//     });
//   };

  // Method that makes the request when we switch from the third to the fourth page
  const handlePageChange = () => {
    setPage(page + 1);
  };
  

//   Back page of Questionnaire
  const handleBack = () => {
    setPage(page - 1);
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // setShowAllInstallments(false);
    // dispatch(resetInstallments());
  };

//   const [isValid, setIsValid] = useState("");
//   const numericValue = parseInt(
//     state.monetaryValue.replace(/[^0-9.-]+/g, "").replace(".", ""),
//     10
//   );

//   useEffect(() => {
//     if (numericValue < 200 || numericValue > 10000) {
//       setIsValid(true);
//     } else {
//       setIsValid(false);
//     }
//   }, [numericValue]);

  // Validate buttons enabled and disabled
  const isContinueButtonEnabled = {
    1: (state) => isNonEmptyString(state.creditOption),
    2: (state) => state.creditOption === "Antecipação 13" && isNonEmptyString(state.monetaryValue) ? true :isNonEmptyString(state.agreementOption),
    3: (state) => isNonEmptyString(state.monetaryValue),
  };

  console.log(state)

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setClose(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#005CA9" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setClose(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              CAIXA ÁGIL
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
            width: 500,
            padding: 16, 
            justifyContent: "center",
            alignContent: "center",
            background: 'linear-gradient(to right, #FFF, #D0E0E3)',
          }}
        >
          <Questionnaire
          handleBack={handleBack}
          state={state}
            page={page}
            titlePage={"Qual o tipo de crédito?"}
            handlePageChange={handlePageChange}
            isContinueButtonEnabled={isContinueButtonEnabled}
            dispatch={dispatch}
          />
          <Grid
            container
            style={{ margin: 0 }}
            flexDirection={"column"}
            spacing={1}
            justifyContent={"center"}
          >
            <RenderIf predicate={page === 4}>
              <Grid item>
                {/* <Item> */}
                {/* <ExpandButton variant="text" onClick={handleShowAllInstallments}> */}
               {/* </ExpandButton> */}
                  {/* <Button variant="outlined" onClick={handleShowAllInstallments}>
                    {showAllInstallments ? "Resumo" : "Mais informações"}
                  </Button> */}
                {/* </Item> */}
              </Grid>
            </RenderIf>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}

export default TakeLoan;
