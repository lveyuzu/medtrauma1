import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const spacing = (factor) => `${8 * factor}px`;

const useStyles = makeStyles(() => ({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: spacing(5), 
    width: '300px',  
    height: '200px',   
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      opacity: 0.9,
    },
  },
  button: {
    width: '100%',
    height: '100%', 
    fontSize: '16px',
  },

  
}));

const ComplexButton = ({ href, label, backgroundImage, caption }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Button
        variant="text"
        className={classes.button}
        href={href}
      >
        {label}
      </Button>
      
    </div>
  );
};

export default ComplexButton;
