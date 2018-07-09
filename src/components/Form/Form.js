import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';

const style = {
  input: {
    width: '700px',  
    borderRadius: 4,
    backgroundColor: 'white',
    border: '1px solid #ced4da',
    fontSize: 16,  
    padding: '10px 12px',    
  },
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10%'
  },  
  button: {
    color: 'white',
    backgroundColor: 'black',
  },
};

const Form = ({ onButtonSubmit, onInputchange }) => {
	return(    
      <div style = {style.wrap}>
  			<TextField 
        style = {style.input}
        placeholder = 'Enter an image URL'
        InputProps = {{
          disableUnderline: true,          
        }} 
        onChange = {onInputchange}       
  	    />
      <Button 
      color = 'primary' 
      style = {style.button}
      onClick = {onButtonSubmit}

      >      
        Submit        
      </Button>         	    
      </div>
	)
}



export default Form;