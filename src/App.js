import React from 'react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import './App.css';
import logo from './logo.svg';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
      control={<Checkbox
        checked={checked}
        icon={<SaveIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label' : 'error checkbox'
        }}
      />}
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField id="standard-basic" variant="filled" color='error' type="email" label="Email" placeholder='test@gmail.com' />
        <CheckboxExample />
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
