import React from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import './App.css';
import logo from './logo.svg';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup variant="contained" color="primary">
          <Button
          startIcon={<SaveIcon />}
          >
          Save
          </Button>
          <Button
          startIcon={<DeleteIcon />}
          >
          Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header> 
    </div>
  );
}

export default App;
