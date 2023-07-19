import React, { useState } from "react";
import { useMatchesSmartphone } from "../Breakpoints";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";
import {useNavigate } from "react-router-dom";

function Home() {
  // State to open Questionnaire
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/Login");
}

  // Settings to Carousel header in Home Page
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  // Custom Hook that identifies whether the resolution is in mobile
  const isMobile = useMatchesSmartphone();

  return (
    <>
      <AppBar position="absolute" style={{ background: "linear-gradient(to right, #0900A9, #54BBAB)" }}>
        <Toolbar style={{ minHeight: "65px !important" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex" }}>
            <img src="/Images/negativo.png" alt="Slide 1" style={{ width: "128px" }} />
          </Typography>
          <Button onClick={handleLogin} size={"small"} variant="outlined" style={{ cursor: "pointer" }} color="inherit">
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
        {/* Header */}
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Slider pauseOnHover={false} {...settings}>
            <div>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
                style={{height: "100vh"}}
              >
                <Grid item xs={12} md={6}>
                  <Box sx={{ background: settings.gradientColor, p: 2 }}>
                    <Typography
                      style={{ fontSize: isMobile ? 22 : 32 }}
                      className="classText"
                      textAlign="center"
                      variant="body1"
                      component="div"
                    >
                      <span className="orange-text">Crédito sob medida </span>{" "} <br></br>
                      experiência financeira descomplicada.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/Images/logo_on_header.png"
                      alt="Slide 2"
                      style={{
                        height: "auto",
                        paddingTop: 64,
                        objectFit: "contain",
                        maxWidth: "100%",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </div>
            {/* <div>
              <Grid
                container
                style={{ height: isMobile ? "50%" : "100%" }}
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{ background: settings.gradientColor }}
                >
                  <Typography
                    style={{ fontSize: isMobile ? 22 : 36 }}
                    className="classText"
                    textAlign="center"
                    variant="body1"
                    component="div"
                  >
                    Solicite seu crédito na CAIXA com{" "}
                    <span className="orange-text"> facilidade e segurança</span>
                    .
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="/Images/header.jpg"
                    alt="Slide 2"
                    style={{
                      height: "auto",
                      width: "100%",
                      objectFit: "cover",
                      maxWidth: "60%",
                    }}
                  />
                </Grid>
              </Grid>
            </div> */}
          </Slider>
          {/* Footer */}
          <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          // background: "linear-gradient(to right, #005CA9, #54BBAB)",
          background:" linear-gradient(to right, #0900A9, #54BBAB)"
        }}
      >
        <Box p={3} style={{ background: "linear-gradient(to right, #0900A9, #54BBAB)" }}>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <a href="https://pt-br.facebook.com/caixa/" target="_blank" rel="noopener noreferrer">
              <Facebook style={{ fontSize: "2rem", margin: "0.5rem", color: "white" }} />
            </a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FCaixa" target="_blank" rel="noopener noreferrer">
              <Twitter style={{ fontSize: "2rem", margin: "0.5rem", color: "white" }} />
            </a>
            <a href="https://www.instagram.com/caixa/" target="_blank" rel="noopener noreferrer">
              <Instagram style={{ fontSize: "2rem", margin: "0.5rem", color: "white" }} />
            </a>
          </Box>
          <Typography variant="body2" style={{ color: "orange", textAlign: "center", fontWeight: 800 }}>
            CAIXA ECONÔMICA FEDERAL
          </Typography>
          <Typography variant="body2" style={{ color: "white", textAlign: "center" }}>
            Entre em contato conosco:
            <a href="mailto:seu-email@organizacao.com" style={{ marginLeft: "0.5rem", color: "white" }}>
              <Email style={{ verticalAlign: "middle", color: "white" }} /> contato@caixa.gov.br
            </a>
          </Typography>
        </Box>
      </Box>
      </Box>
    </>
  );
}

export default Home;
