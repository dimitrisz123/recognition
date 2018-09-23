import React from "react";
// import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { withStyles } from '@material-ui/core/styles';

const style = {
  container: {
    paddingTop: "48px",
    height: "100vh"
  },
  wrap: {
    margin: "0 auto",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%"
  },
  http: {
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    width: "70%",
    borderRadius: 4,
    backgroundColor: "white",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "7px 12px",
    margin: "0 0.6rem"
  },
  button: {
    width: "10%",
    alignSelf: "stretch",
    color: "white",
    backgroundColor: "black"
  },
  local: {
    display: "flex",
    alignItems: "center"
  }
};

const Form = ({ onButtonSubmit, onInputchange, onUploadImage }) => {
  return (
    <div style={style.container}>
      <div style={style.wrap}>
        <Typography variant="display1" align="center">
          Recognize food items and dishes, down to the ingredient level
        </Typography>

        <div style={style.http}>
          <TextField
            style={style.input}
            placeholder="Enter an image URL"
            InputProps={{
              disableUnderline: true
            }}
            onChange={onInputchange}
          />
          <Button color="primary" style={style.button} onClick={onButtonSubmit}>
            Submit
          </Button>
        </div>
        <div style={style.local}>
          <Typography variant="title" align="left">
            Or by uploading your own picture:
          </Typography>
          <input
            style={{ display: "none" }}
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={onUploadImage}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              component="span"
              style={{ marginLeft: "0.6rem" }}
            >
              Upload
            </Button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Form;
