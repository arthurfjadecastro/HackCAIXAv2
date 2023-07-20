import React, {useState} from "react";
import { Footer, Navbar } from "../Resources";
import { Grid } from "@mui/material";
import ClientFlow  from "./ClientFlow/ClientFlow";
import useCreateAntecipacao from "../../Network/useCreateAntecipacao";


function Client() {

    const [page, setPage] = useState(1);
    
    const handlePageChange = () => {
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setPage(page + 1);
    };

    return (
      <>
        <Navbar login={false} logout={true} />
        <Grid container style={{ height: "100vh", background: "linear-gradient(to right, #0900A9, #54BBAB)" }}>
      <Grid style={{display: "flex"}} item xs={6} >
        <ClientFlow handlePageChange={handlePageChange} currentPage={page}/>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          backgroundImage: `url(${"images/back_three.png"})`,
          backgroundSize: "intehirt",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

        }}
      >
        A2
      </Grid>
    </Grid>
        <Footer/>
      </>
    );
  }


export default Client;



