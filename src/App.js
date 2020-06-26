import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';

const CELLS_PER_ROW = 50
const CELLS_PER_COL = 50

class App extends React.Component {

  state = {
    cells: [
      
    ],
    //should_re_render: true,
  }

  componentDidMount = () => {
    const initial_cells = []

    for(let i = 0; i < CELLS_PER_ROW; ++i){
      for(let j =0; j < CELLS_PER_COL; ++j) {
        initial_cells.push({
          xCoord: 50*i,
          yCoord: 50*j
        })
      }
    }

    this.setState({
      ...this.state,
      cells: initial_cells
    })
  }



  render() {
    const grid = []
    let i = 0
    for (i = 0; i < this.state.cells.length; i++) {
      const tempIndex = i
      const cell = this.state.cells[tempIndex]
      grid.push(<Cell xCoord={cell["xCoord"]} yCoord={cell["yCoord"]} cellColor="white" key={i} />)
    }
      
    return (
      <div className="App">
        {grid}
      </div>
    );

  }
  
}


export default App;
