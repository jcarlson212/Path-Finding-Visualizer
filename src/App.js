import React from 'react';
import './App.css';
import Search from './Search'
import Sort from './Sort';
import Cell, { CELL_WIDTH } from './Cell';
import { NavigationBar, NAVAGATION_BAR_HEIGHT } from './NavigationBar';
import { hashCoord } from './GridHelperFunctions';
import { breadthFirstSearch } from './SearchAlgorithms';

export const CELLS_PER_ROW = 50;
export const CELLS_PER_COL = 50;

class App extends React.Component {

  state = {
    screen: "search"
  }

  componentDidMount(){

  }

  changeScreen = () => {
    this.setState({
      ...this.state,
      screen: (this.state.screen === "search") ? "sort" : "search"
    })
  }

  render() {
    return (
      <div>
        {(this.state.screen === "search") ? <Search/> : <Sort/>}
        <button onClick={() => this.changeScreen()}>Click me to change screen</button>
      </div>
    );
  }
}


export default App;
