import React from 'react';
import { FirstPage, SecondPage, ThirdPage } from './Pages';
import { Grid, Typography } from '@mui/material';
import { RenderIf } from '../../../Utils';
import { DefaultButton } from '../../UI/Buttons';

function Questionnaire({ page, handlePageChange, titlePage,isContinueButtonEnabled,dispatch, state }) {
  return (
    <>
      <Grid container  direction="column" justifyContent="space-between" alignItems="center" style={{height: "100%", margin: 0,padding: 0}}>
      <Typography >{titlePage}</Typography>
        <Grid item>
          <RenderIf predicate={page === 1}>
            <FirstPage dispatch={dispatch} />
          </RenderIf>
          <RenderIf predicate={page === 2}>
            <SecondPage dispatch={dispatch} />
          </RenderIf>
          <RenderIf predicate={page === 3}>
            <ThirdPage />
          </RenderIf>
        </Grid>
          <DefaultButton handlePageChange={handlePageChange} isContinueButtonEnabled={isContinueButtonEnabled[page](
                      state
                    )} buttonTitle={"Continuar"} />
      </Grid>
    </>
  );
}

export default Questionnaire;
