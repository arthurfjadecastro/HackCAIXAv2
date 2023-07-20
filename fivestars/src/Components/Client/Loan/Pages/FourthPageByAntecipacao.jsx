import React, { useState } from 'react';
import { LoanDetails } from '../../../UI/Frames';




function FourthPageByAntecipacao({ response }) {
  return (
    <>
     <LoanDetails response={response}/>
    </>
  );
}

export default FourthPageByAntecipacao;
