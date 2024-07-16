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
    width: '530px',  
    height: '300px',   
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      opacity: 0.9,
    },
    '@media (max-width: 600px)': {  
      width: '100%',  
      height: 'auto',   
      padding: spacing(3),  
    },
  },
  button: {
    width: '100%',
    height: '100%', 
    fontSize: '16px',
    '@media (max-width: 600px)': {  
      fontSize: '14px',  
    },
  },
  caption: {
    marginTop: spacing(2), 
    textAlign: 'center',  
    '@media (max-width: 600px)': {  
      fontSize: '12px',  
      marginTop: '500px',
    },
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
      {caption && <div className={classes.caption}>{caption}</div>} {/* Render caption if provided */}
    </div>
  );
};

export default ComplexButton;
