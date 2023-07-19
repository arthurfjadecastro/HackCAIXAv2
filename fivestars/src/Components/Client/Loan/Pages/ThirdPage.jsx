import React from 'react';
import { Grid } from '@mui/material';
import {Monetary} from "../../../UI/Inputs"

function ThirdPage() {
  return (
    <>
    <Grid container>
        <Grid item>
        <Monetary
            value={""}
            // onChange={(event) =>
            //   dispatch({ type: "monetaryValue", payload: event.target.value })
            // }
          />
        </Grid>
    </Grid>
    </>
  );
}


export default ThirdPage;