import React from 'react';
import ReactDOM from 'react-dom';
import startnode from "./images/startnode.png";
import endnode from "./images/endnode.png";
import { CELLS_PER_ROW, CELLS_PER_COL } from "./App";
import { hashCoord } from "./GridHelperFunctions";
import { breadthFirstSearch } from "./SearchAlgorithms";

//There needs to be 
//1) A drop down list of algorithms
//2) A button called Run to run the selected algorithm 
//3) the selected algorithm should be stored in the state
//4) A button that takes them to a different page for seeing graph algorithms (for now the button
// wont do anything, but it will be used for showing MST stuff instead of DFS and such)
// There should also be a button for taking them to the current thing (so they can be called 
// Search Algorithms and Graph Algorithms respectively). There should also be a button called sorting 
//algorithms
//5) There should be a square called start node that the user can click (and it should call a function that)
// can do nothing at the moment. I am thinking like a green dot in the middle of a 50x50 square
//6) similar a red node (a red dot)
//7) After all of this (or before doing this) you can also do the animation of the cells changing color
export const NAVAGATION_BAR_HEIGHT = 100;

export class NavigationBar extends React.Component {state={
    isDragging: false,

    originalX: 0,
    originalY: 0,

    translateX: 0,
    translateY: 0,

    lastTranslateX: 0,
    lastTranslateY: 0

}
    constructor(props) {
        super(props);
        this.state = {value: 'algorithm'};

        this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event) {
            this.setState({value: event.target.value});
        }

        clearBoard=()=>{
            for(let i = 0; i < CELLS_PER_ROW; ++i){
                for(let j =0; j < CELLS_PER_COL; ++j) {
                
                    let xCoord= 50*i
                    let yCoord= 50*j + NAVAGATION_BAR_HEIGHT
                    if (this.props.grid_map.refs[hashCoord(xCoord,yCoord)] !== undefined)
                    {
                        this.props.grid_map.refs[hashCoord(xCoord,yCoord)].clear()
                    }

                    
                }           
            }
        }

        run = () => {
            breadthFirstSearch(this.props.grid_map.refs, [200, 100], [300, 800])
        }
            
        render() {
            return(
                <div style={{ 
                    width: '213%', 
                    height: NAVAGATION_BAR_HEIGHT,
                    backgroundColor: "silver",
                }}>
                <p style={{color: "blue"}}>Path Finding Visuslizer </p>
                
                <select value={this.state.value} onChange={this.handleChange}>
              <option value="Algorithm">Algorithm</option>
              <option value="Dijkstra's Algorithm">Dijkstra's Algorithm</option>
              <option value="DFS">DFS</option>
              <option value="BFS">BFS</option>
            </select>
                  
            <select>
            <option value="Speed">Speed</option>
              <option value="Slow">Slow</option>
              <option value="Medium">Medium</option>
              <option value="Fast">Fast</option>
            </select>

            Drag to starting position:<img alt="startnode" className="startnode" src={startnode} width="40" height="30"/>
            Drag to ending position:<img alt="endnode" className="endnode" src={endnode} width="45" height="35"/>

            <button onClick={() => { this.run() } }>Run</button>
            <button onClick={() => {this.clearBoard()}}>Clear Board</button>
            

            </div>
    );
    }
}