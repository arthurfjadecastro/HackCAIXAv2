import React, {useState} from 'react';
import { FirstPage, SecondPage, ThirdPage } from './Pages';
import { Grid, Typography } from '@mui/material';
import { RenderIf } from '../../../Utils';
import { DefaultButton } from '../../UI/Buttons';


function Questionnaire({ page, handlePageChange, titlePage,isContinueButtonEnabled,dispatch, state, handleBack }) {
    // const [showButtons, setShowButtons] = useState(true);


  return (
    <>
      <Grid container  direction="column" justifyContent="space-between" alignItems="center" style={{height: "100%", margin: 0,padding: 0}}>
      <Typography >{titlePage}</Typography>
        <Grid item>
          <RenderIf predicate={page === 1}>
            <FirstPage dispatch={dispatch} />
          </RenderIf>
          <RenderIf predicate={page === 2}>
            <SecondPage creditOption={state.creditOption} dispatch={dispatch} />
          </RenderIf>
          <RenderIf  predicate={page === 3}>
            <ThirdPage dispatch={dispatch} state={state} />
          </RenderIf>
        </Grid>
        <Grid container justifyContent={"center"} spacing={2} direction={"column"}>
            <Grid style={{display: "flex", justifyContent: "center"}} item>
            <DefaultButton handlePageChange={handlePageChange} isContinueButtonEnabled={isContinueButtonEnabled[page](state)} buttonTitle={"Continuar"} />
            </Grid>
            <Grid style={{display: "flex", justifyContent: "center"}} item>
            <RenderIf predicate={page > 1 && page < 4}>
                 <DefaultButton handlePageChange={handleBack} buttonTitle={"Voltar"} isContinueButtonEnabled={true} />
            </RenderIf>  
            </Grid>
        </Grid>
        
      </Grid>
    </>
  );
}

export default Questionnaire;
