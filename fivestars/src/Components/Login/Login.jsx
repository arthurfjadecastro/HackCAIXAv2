import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Link, Box, Grid, IconButton } from "@mui/material";
import { Email, Facebook, Instagram, Twitter } from "@mui/icons-material";
import "./Login.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buttonClass, setButtonClass] = useState("login-button");
    const navigate = useNavigate()
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const handleLogin = () => {
        navigate("/Adm");
        // navigate("/Login");
    }

    useEffect(() => {
        if (username !== "" && password !== "") {
            setButtonClass("login-button-filled");
        } else {
            setButtonClass("login-button");
        }
    }, [username, password]);



    return (
        <>
            <Box sx={{ flexGrow: 1 }} mx="auto" maxWidth="100%" style={{ width: "100%", overflow: "hidden", marginTop: 0 }}>

                <AppBar position="absolute" style={{ background: "linear-gradient(to right, #005CA9, #54BBAB)" }}>

                    <Toolbar style={{ minHeight: "65px !important" }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex" }}>
                            <img src="/Images/negativo.png" alt="Slide 1" style={{ width: "128px" }} />
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className="login-container">
                    <h2 className="login-heading">Login</h2>
                    <form className="login-form">
                        <label className="login-label" htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="login-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="login-label" htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleLogin} type="submit" className={buttonClass}>Login</button>

                    </form>
                </div>
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

export default Login;