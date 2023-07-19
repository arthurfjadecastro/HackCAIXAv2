import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '16px',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    gap: '8px',
  },
  checkboxLabel: {
    '& .MuiTypography-root': {
      fontWeight: 'bold',
    },
    '& .MuiCheckbox-root': {
      color: '#FF6600',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&:hover:not(.Mui-disabled)': {
        backgroundColor: 'transparent',
      },
    },
    '&.disabled': {
      '& .MuiTypography-root': {
        color: 'grey',
      },
      '& .MuiCheckbox-root': {
        color: 'grey',
        pointerEvents: 'none',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '&:hover:not(.Mui-disabled)': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

function FirstPage({ dispatch }) {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);

    // Dispatch the action with the selected option
    dispatch({ type: 'creditOption', payload: option });
  };

  return (
    <>
      <div className={classes.checkboxContainer}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedOption === 'Comprar imóvel'}
              onChange={() => handleCheckboxChange('Comprar imóvel')}
              name="comprarImovel"
              disabled
            />
          }
          label="Comprar Imóvel"
          className={`${classes.checkboxLabel} disabled`}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedOption === 'Pagar dívidas'}
              onChange={() => handleCheckboxChange('Pagar dívidas')}
              name="pagarDividas"
            />
          }
          label="Pagar Dívidas"
          className={classes.checkboxLabel}
        />
      </div>
    </>
  );
}

export default FirstPage;
