import { Grid, Typography } from "@mui/material";
import React from "react";
import { RenderIf } from "../../../Utils";
import { Card, CardMedia } from '@mui/material';
import { makeStyles } from "@mui/styles";

const images = [
  './images/hand_holding.png',
  './images/user_shield.png',
  './images/chart_line.png'
];

const useStyles = makeStyles({
  root: {
  },
  card: {
    width: 128,
    height: 128,
    margin: 16,
    cursor: "pointer",
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  media: {
    height: '100%'
  },
  cardName: {
    color: "#005CA9",
    fontSize: 16,
    fontWeight: "regular",
    textAlign: "center",
    marginTop: 8
  }
});

function FirstPage() {
  const classes = useStyles();

  return (
    <>
      <Grid container direction={"column"} justifyContent={"center"} alignContent={"center"}>
        <Grid item>
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              marginBottom: "8px",
              fontSize: "32px",
              textAlign: "center"
            }}
          >
            <span style={{ color: "#FF6600" }}>{"Qual opção você deseja"}</span>{" "}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justifyContent="center">
            {images.map((image, index) => (
              <Grid item key={index}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title={`Image ${index + 1}`}
                  />
                </Card>
                <Typography className={classes.cardName}>
                  {index === 0 && "Empréstimo"}
                  {index === 1 && "Seguros"}
                  {index === 2 && "Investimentos"}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function SecondPage() {
  return (
    <>
      <h1>
        Second Page
      </h1>
    </>
  )
}

function ThirdPage() {
  return (
    <>
      <h1>
        Third Page
      </h1>
    </>
  )
}

function ClientQuestionnaire({currentPage,handlePageChange}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <RenderIf predicate={currentPage === 1}>
        <FirstPage />
      </RenderIf>
      <RenderIf predicate={currentPage === 2}>
        <SecondPage />
      </RenderIf>
      <RenderIf predicate={currentPage === 3}>
        <ThirdPage />
      </RenderIf>
    </div>
  );
}

export default ClientQuestionnaire;