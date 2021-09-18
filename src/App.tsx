import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as data from './counter.json';

const startCount = parseInt(data.start);
const maxCount = parseInt(data.maxCount);
var newCount = 0;

function counting(counter: number) {
  newCount = counter + 1;
  console.log(newCount);

  return newCount;
};

const mintButton = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
});


function App() {
  const classes = mintButton();

  return (
    <div className="App">
      <header className="App-header">
          <Button className={classes.root} 
            onClick={() => {
              alert("Pressed!");
            }}>
            Click Here</Button>
          <div>Number Clicked: {counting(startCount)}</div>
      </header>
    </div>
  );
}

export default App;
