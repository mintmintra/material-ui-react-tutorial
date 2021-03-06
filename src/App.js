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
import { makeStyles, ThemeProvider} from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    marginBottom: 15,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
})

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    }
  } 
})

  function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled button</Button>;
}

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
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <Hook />
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
    </ThemeProvider>
  );
}

export default App;
