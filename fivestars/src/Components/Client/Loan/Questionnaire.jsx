import React from 'react';
import { FirstPage, SecondPage, ThirdPage } from './Pages';
import { Grid } from '@mui/material';
import { RenderIf } from '../../../Utils';



function Questionnaire({page}) {
  return (
   <>
   <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        style={{ maxWidth: 600 }}
      >
        <RenderIf predicate={page === 1}>
          <FirstPage
            // activeStep={activeStep}
            // handlePageChange={handlePageChange}
            // currentPage={page}
            // state={state}
            // dispatch={dispatch}
          />
        </RenderIf>
        <RenderIf predicate={page === 2}>
          <SecondPage
            // activeStep={activeStep}
            // handleBack={handleBack}
            // handlePageChange={handlePageChange}
            // state={state}
            // dispatch={dispatch}
          />
        </RenderIf>
        <RenderIf predicate={page === 3}>
          <ThirdPage
            // activeStep={activeStep}
            // selectedOption={selectedOption}
            // handleOptionClick={handleOptionClick}
            // activeButton={activeButton}
            // titleInfo={titleInfo}
            // handleType={handleType}
            // response={response}
            // ETLData={ETLData}
            // handleBack={handleBack}
            // state={state}
            // dispatch={dispatch}
            // handlePageChange={handlePageChange}
          />
        </RenderIf>
      </Grid>
   </>
  );
  
}

export default Questionnaire;