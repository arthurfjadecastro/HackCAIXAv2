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
    alignItems: 'center',
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

function FirstPage() {
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      <div className={classes.checkboxContainer}>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedOptions.includes('Comprar imóvel')}
              onChange={() => handleCheckboxChange('Comprar imóvel')}
              name="comprarImovel"
              disabled
            />
          }
          label="Deseja comprar imóvel?"
          className={`${classes.checkboxLabel} disabled`}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedOptions.includes('Pagar dívidas')}
              onChange={() => handleCheckboxChange('Pagar dívidas')}
              name="pagarDividas"
            />
          }
          label="Pagar dívidas?"
          className={classes.checkboxLabel}
        />
      </div>
    </>
  );
}

export default FirstPage;
