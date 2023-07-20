import React, {useState} from 'react';
import { FirstPage, FourthPageByAntecipacao, SecondPage, ThirdPage } from './Pages';
import { Grid, Typography } from '@mui/material';
import { RenderIf } from '../../../Utils';
import { DefaultButton } from '../../UI/Buttons';


function Questionnaire({ page, handlePageChange, titlePage,isContinueButtonEnabled,dispatch, state, handleBack }) {
    // const [showButtons, setShowButtons] = useState(true);
  return (
    <>
      <Grid container spacing={2}  direction="column" justifyContent="space-between" alignItems="center" style={{height: "100%", margin: 0,padding: 0}}>
      <Grid item>
      <Typography >{titlePage}</Typography>
      </Grid>
        <Grid style={{marginBottom: 40, marginTop: 40}} item>
          <RenderIf predicate={page === 1}>
            <FirstPage state={state} dispatch={dispatch} />
          </RenderIf>
        <RenderIf predicate={state.creditOption === "Antecipação 13"}>
            <RenderIf predicate={page === 2}>
            <ThirdPage dispatch={dispatch} state={state} />
            </RenderIf>
            <RenderIf  predicate={page === 3}>
            <FourthPageByAntecipacao/>
          </RenderIf>
          
            </RenderIf>
            <RenderIf predicate={state.creditOption === "Crédito Parcelado"}>
                  <RenderIf predicate={page === 2}>
            <SecondPage state={state} creditOption={state.creditOption} dispatch={dispatch} />
          </RenderIf>
          <RenderIf  predicate={page === 3}>
            <ThirdPage dispatch={dispatch} state={state} />
          </RenderIf>
            </RenderIf>
        </Grid>
        <Grid container justifyContent={"center"} spacing={2} direction={"column"}>
            <Grid style={{display: "flex", justifyContent: "center"}} item>
            <DefaultButton handlePageChange={handlePageChange} isContinueButtonEnabled={isContinueButtonEnabled[page](state)} buttonTitle={"Continuar"} />
            </Grid>
            <RenderIf predicate={page > 1 && page < 4}>
            <Grid style={{display: "flex", justifyContent: "center"}} item>
                 <DefaultButton styleContrast={true} handlePageChange={handleBack} buttonTitle={"Voltar"} isContinueButtonEnabled={true} />
            </Grid>
            </RenderIf>  
        </Grid>
      </Grid>
    </>
  );
}

export default Questionnaire;
