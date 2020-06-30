import React from 'react';
import './App.css';
import Cell from './Cell';
import { NavigationBar, NAVAGATION_BAR_HEIGHT } from './NavigationBar';
import { hashCoord } from './GridHelperFunctions';
import { breadthFirstSearch } from './SearchAlgorithms';

const CELLS_PER_ROW = 50
const CELLS_PER_COL = 50

class App extends React.Component {

  state = {
    cells: [
      
    ],
    //should_re_render: true,
    isMouseDown: {
      mouseDown: false,
    },
    grid_map: {} //this is for the search algorithms to run on
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
  
  componentWillMount = () => {
    console.log(this.state.grid_map)
    //setTimeout(() => {breadthFirstSearch(this.state.grid_map, [100, 100], [500, 500]);}, 15000);
  }



  render() {
    console.log("main render called")
    const grid = []
    let grid_map = {} //this is used for bfs/dfs/search algorithms
    let i = 0
    for (i = 0; i < this.state.cells.length; i++) {
      const tempIndex = i
      const cell = this.state.cells[tempIndex]
      let newCell = <Cell xCoord={cell["xCoord"]} yCoord={cell["yCoord"]} cellColor="white" key={i} isMouseDown={ this.state.isMouseDown } ref={hashCoord(cell["xCoord"], cell["yCoord"])} />
      grid.push(newCell)
      grid_map = {
        ...grid_map,
        [hashCoord(cell["xCoord"], cell["yCoord"])]: [hashCoord(cell["xCoord"], cell["yCoord"])]
      }
    }
    this.state.grid_map = grid_map
    /*
    setTimeout(() => { 
      let key
      for(key in Object.keys(this.state.grid_map)){
        this.state.grid_map[key] = this.refs[key]
      }
      console.log(this.state.grid_map)
      setTimeout(() => {
        breadthFirstSearch(this.state.grid_map, [0, 100], [200, 200])
      })
    }, 1000)
    */
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
