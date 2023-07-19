import React, { useState } from "react";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Route, BrowserRouter, Routes, Outlet, useNavigate } from "react-router-dom";
import { Email, Facebook, Twitter, Instagram } from "@mui/icons-material";




function Home() {
    const navigate = useNavigate()
    const handleLogin = () => {
      // navigate("/Adm");
      navigate("/Login");
    }
  
    return (
      <>
  
        <Box sx={{ flexGrow: 1 }} mx="auto" maxWidth="100%" style={{ width: "100%", overflow: "hidden", marginTop: 0 }}>
          <AppBar position="absolute" style={{ background: "linear-gradient(to right, #005CA9, #54BBAB)" }}>
            <Toolbar style={{ minHeight: "65px !important" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex" }}>
                <img src="/Images/negativo.png" alt="Slide 1" style={{ width: "128px" }} />
              </Typography>
              <Button size={"small"} variant="outlined" style={{ cursor: "pointer" }} color="inherit" onClick={handleLogin}>LOGIN</Button>
            </Toolbar>
          </AppBar>
          <Box mx="auto" maxWidth="100%" style={{ width: "100%", overflow: "hidden" }}>
            <div>
            </div>
          </Box>
        </Box>
        <Box sx={{ position: "fixed", bottom: 0, width: "100%", background: "linear-gradient(to right, #005CA9, #54BBAB)" }}>
          <Box p={3} style={{ background: "linear-gradient(to right, #005CA9, #54BBAB)" }}>
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
            <Typography variant="body2" style={{ color: "orange", textAlign: "center",fontWeight: 800 }}>CAIXA ECONÔMICA FEDERAL</Typography>
            <Typography variant="body2" style={{ color: "white", textAlign: "center" }}>
              Entre em contato conosco:
              <a href="mailto:seu-email@organizacao.com" style={{ marginLeft: "0.5rem", color: "white" }}>
                <Email style={{ verticalAlign: "middle", color: "white" }} /> contato@caixa.gov.br
              </a>
            </Typography>
          </Box>
        </Box>
      </>
    );
  }


  export default Home;