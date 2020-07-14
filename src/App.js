import React from 'react';
import './App.css';
import Search from './Search'
import Cell, { CELL_WIDTH } from './Cell';
import { NavigationBar, NAVAGATION_BAR_HEIGHT } from './NavigationBar';
import { hashCoord } from './GridHelperFunctions';
import { breadthFirstSearch } from './SearchAlgorithms';

export const CELLS_PER_ROW = 50;
export const CELLS_PER_COL = 50;

class App extends React.Component {

  state = {

  }

  componentDidMount(){

  }

  render() {
   
  
    return (
      <Search/>
    );

  }
  
}


export default App;
