import React from 'react';
import './App.css';
import Cell, { CELL_WIDTH } from './Cell';
import { NavigationBar, NAVAGATION_BAR_HEIGHT } from './NavigationBar';
import { hashCoord } from './GridHelperFunctions';
import { breadthFirstSearch } from './SearchAlgorithms';

export const CELLS_PER_ROW = 50;
export const CELLS_PER_COL = 50;

class App extends React.Component {

  state = {
    cells: [//this is just the positions of the cells
      
    ],
    //should_re_render: true,
    isMouseDown: {//This is passed to children. It handles the mousedown stuff for all of them. This avoids constant re-rendering.
      mouseDown: false,
    },
    grid_map: {}, //this is for the search algorithms to run on
    grid_map_to_pass_down: { //This is what gets passed to children (like nav bar) to initially run the search algorithms
      refs: {//every ref has a key which maps it to an actual cell class.

      },
    },
    nodePressed: {
      start_pressed: false,
      end_pressed: false,
    },
    endPointsForSearch: {
      startNode: [200, 100],
      endNode: [300, 800],
    }
  }

  //Defines the coordinates of where cells will eventually be rendered / placed when initialized
  constructor() {
    super()
    const initial_cells = []

    for(let i = 0; i < CELLS_PER_ROW; ++i){
      for(let j =0; j < CELLS_PER_COL; ++j) {
        initial_cells.push({
          xCoord: 50*i,
          yCoord: 50*j + NAVAGATION_BAR_HEIGHT,
        })
      }
    }
    this.state = {
      ...this.state,
      cells: initial_cells
    };
  }

  //Here we get refs to all of the cells so that we can change their color and mark them with
  //our search algorithms
  componentDidMount(){
    let i= 0
    for (i = 0; i < this.state.cells.length; i++) {
      const tempIndex = i
      const cell = this.state.cells[tempIndex]
      this.state.grid_map[hashCoord(cell["xCoord"], cell["yCoord"])] = this.refs[hashCoord(cell["xCoord"], cell["yCoord"])]
      
    }
    this.state.grid_map_to_pass_down.refs = this.state.grid_map
  }


  //renders a Navigation bar and a grid of cells.
  render() {
    console.log("main render called")
    const grid = []
    let grid_map = {} //this is used for bfs/dfs/search algorithms
    let i = 0
    for (i = 0; i < this.state.cells.length; i++) {
      const tempIndex = i
      const cell = this.state.cells[tempIndex]
      let newCell = <Cell xCoord={cell["xCoord"]} yCoord={cell["yCoord"]} cellColor="white" key={i} isMouseDown={ this.state.isMouseDown } ref={hashCoord(cell["xCoord"], cell["yCoord"])} nodePressed={this.state.nodePressed} endNodes={this.state.endPointsForSearch} />
      grid.push(newCell)
      grid_map = {
        ...grid_map,
        [hashCoord(cell["xCoord"], cell["yCoord"])]: this.refs[hashCoord(cell["xCoord"], cell["yCoord"])] //initially, these refs are null (have to be mounted for some reason)
      }
    }
    this.state.grid_map = grid_map
    this.state.grid_map_to_pass_down.refs = this.state.grid_map

    return (
      <div style={{ height: '2600px' }}>
        <NavigationBar  grid_map={this.state.grid_map_to_pass_down} nodePressed={ this.state.nodePressed } endPoints={this.state.endPointsForSearch}/>
        <div className="App" onMouseDown={() => { this.state.isMouseDown.mouseDown = true }} onMouseUp={() => { this.state.isMouseDown.mouseDown = false }} >
          {grid}
        </div>
      </div>
    );

  }
  
}


export default App;
