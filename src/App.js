import React from 'react';
import './App.css';
import Cell from './Cell';
import { NavigationBar, NAVAGATION_BAR_HEIGHT } from './NavigationBar';

const CELLS_PER_ROW = 50
const CELLS_PER_COL = 50

class App extends React.Component {

  state = {
    cells: [
      
    ],
    //should_re_render: true,
    isMouseDown: {
      mouseDown: false,
    }
  }

  componentDidMount = () => {
    const initial_cells = []

    for(let i = 0; i < CELLS_PER_ROW; ++i){
      for(let j =0; j < CELLS_PER_COL; ++j) {
        initial_cells.push({
          xCoord: 50*i,
          yCoord: 50*j + NAVAGATION_BAR_HEIGHT,
        })
      }
    }

    this.setState({
      ...this.state,
      cells: initial_cells
    })
  }



  render() {
    console.log("main render called")
    const grid = []
    let i = 0
    for (i = 0; i < this.state.cells.length; i++) {
      const tempIndex = i
      const cell = this.state.cells[tempIndex]
      grid.push(<Cell xCoord={cell["xCoord"]} yCoord={cell["yCoord"]} cellColor="white" key={i} isMouseDown={ this.state.isMouseDown } />)
    }
      
    return (
      <div style={{ height: '2600px' }}>
        <NavigationBar />
        <div className="App" onMouseDown={() => { this.state.isMouseDown.mouseDown = true }} onMouseUp={() => { this.state.isMouseDown.mouseDown = false }} >
          {grid}
        </div>
      </div>
    );

  }
  
}


export default App;
