import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import {RenderIf} from "../../Utils"
import { Link } from 'react-router-dom';


function Navbar({login, handleLogin}) {
  return (
    <>
    <AppBar position="absolute" style={{ background: "linear-gradient(to right, #0900A9, #54BBAB)" }}>
        <Toolbar style={{ minHeight: "65px !important" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex" }}>
                <Link style={{display: "flex"}} to="/">

                <img src="/Images/negativo.png" alt="Slide 1" style={{ width: "128px" }} />
                </Link>
            </Typography>
            <RenderIf predicate={login === true}>
                <Button onClick={handleLogin} size={"small"} variant="outlined" style={{ cursor: "pointer" }} color="inherit">
                    LOGIN
                </Button>
            </RenderIf>
        </Toolbar>
    </AppBar>
                
    </>
  )
}

export default Navbar;