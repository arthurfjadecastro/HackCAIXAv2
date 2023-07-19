import React, {useState} from "react";
import { Footer, Navbar } from "../Resources";
import { Grid } from "@mui/material";
import ClientQuestionnaire  from "./ClientFlow/ClientQuestionnaire";




function Client() {

    const [page, setPage] = useState(1);

    const handlePageChange = () => {
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setPage(page + 1);
      };

    return (
      <>
        <Navbar login={false}/>
        <Grid container style={{ height: "100vh" }}>
      <Grid item xs={6} >
        <ClientQuestionnaire handlePageChange={handlePageChange} currentPage={page}/>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          backgroundImage: `url(${"images/back_three.jpg"})`,
          backgroundSize: "contain",
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



