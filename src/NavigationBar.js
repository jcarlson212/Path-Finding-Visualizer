import React from 'react';
import ReactDOM from 'react-dom';
import startnode from "./images/startnode.png";
import endnode from "./images/endnode.png";
import './NavBar.css';
import { CELLS_PER_ROW, CELLS_PER_COL } from "./App";
import { hashCoord } from "./GridHelperFunctions";
import { breadthFirstSearch, AStarSearch, depthFirstSearch } from "./SearchAlgorithms";
import { NORMAL, FAST, SLOW, ULTRA } from './Constants';
import { CELL_WIDTH } from './Cell';

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

export class NavigationBar extends React.Component {

    state = {
        isDragging: false,

        originalX: 0,
        originalY: 0,

        translateX: 0,
        translateY: 0,

        lastTranslateX: 0,
        lastTranslateY: 0,
        algorithm: "algorithm",
        speed: "Medium",
    }

    constructor(props) {
        super(props);
    }

    clearBoard = () => {
        for (let i = 0; i < CELLS_PER_ROW; ++i) {
            for (let j = 0; j < CELLS_PER_COL; ++j) {
                let xCoord = 50 * i
                let yCoord = 50 * j + NAVAGATION_BAR_HEIGHT
                if (this.props.grid_map.refs[hashCoord(xCoord, yCoord)] !== undefined) {
                    this.props.grid_map.refs[hashCoord(xCoord, yCoord)].clear()
                }
            }
        }
    }

    startNodePressed = () => {
        console.log("start node pressed")
        this.props.nodePressed.start_pressed = true
        this.props.nodePressed.end_pressed = false
    }

    endNodePressed = () => {
        console.log("end node pressed")
        this.props.nodePressed.end_pressed = true
        this.props.nodePressed.start_pressed = false
    }

    run = () => {
        console.log(this.state.speed);
        if (this.state.speed === "Medium" || this.state.speed === "Speed") {
            if (this.state.algorithm === "A*") {
                AStarSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, NORMAL)
            } else if (this.state.algorithm === "DFS") {
                depthFirstSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, NORMAL)
            } else {
                breadthFirstSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, NORMAL)
            }
        } else if (this.state.speed === "Fast") {
            if (this.state.algorithm === "A*") {
                AStarSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, FAST)
            } else if (this.state.algorithm === "DFS") {
                depthFirstSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, FAST)
            } else {
                breadthFirstSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, FAST)
            }
        } else if (this.state.speed === "Slow") {
            if (this.state.algorithm === "A*") {
                AStarSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, SLOW)
            } else if (this.state.algorithm === "DFS") {
                depthFirstSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, SLOW)
            } else {
                breadthFirstSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, SLOW)
            }
        } else {
            if (this.state.algorithm === "A*") {
                AStarSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, ULTRA)
            } else if (this.state.algorithm === "DFS") {
                depthFirstSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, ULTRA)
            } else {
                breadthFirstSearch(this.props.grid_map.refs, this.props.endPoints.startNode, this.props.endPoints.endNode, ULTRA)
            }
        }
    }

    render() {
        return (
            <div style={{
                height: NAVAGATION_BAR_HEIGHT,
                display: "flex",
                backgroundColor: "rgb(23,213,213)",
                flexDirection: "row",
                alignItems: "center"
            }}>

                <div style={{ marginLeft: 5, margingRight: 5 }}>
                    <a>
                        Path Finding Visualizer
                    </a>
                   
                    <select value={this.state.algorithm} onChange={(event) => {
                        this.setState({
                            ...this.state,
                            algorithm: event.target.value
                        })
                    }}>

                        <option disabled selected style="Algorithm" style={{ color: "black" }}>Algorithm</option>
                        <option value="A*" style={{ color: "black" }}>A*</option>
                        <option value="DFS" style={{ color: "black" }}>DFS</option>
                        <option value="BFS" style={{ color: "black" }}>BFS</option>
                    </select>
            &nbsp;&nbsp;&nbsp;

            <select value={this.state.speed} onChange={(event) => {
                        this.setState({
                            ...this.state,
                            speed: event.target.value
                        })
                    }}>
                        <option disabled selected style="Speed" style={{ color: "black" }}>Speed</option>
                        <option value="Slow" style={{ color: "black" }}>Slow</option>
                        <option value="Medium" style={{ color: "black" }}>Medium</option>
                        <option value="Fast" style={{ color: "black" }}>Fast</option>
                        <option value="Ultra" style={{ color: "black" }}>Ultra</option>
                    </select>

            &nbsp;&nbsp;&nbsp;<b>Drag to starting position:&nbsp;&nbsp;<button class="button button1" draggable={true} onDragStart={() => { this.startNodePressed() }} ><img src={startnode} width="30" height="30"></img></button>
            &nbsp;&nbsp;&nbsp;Drag to ending position:&nbsp;&nbsp;<button class="button button2" draggable={true} onDragStart={() => { this.endNodePressed() }}><img src={endnode} width="40" height="30" /></button></b>


            &nbsp;&nbsp;&nbsp;<button class="button button3" onClick={() => { this.run() }}>Run</button>
            &nbsp;&nbsp;&nbsp;<button class="button button4" onClick={() => { this.clearBoard() }}>Clear Board</button>

            </div>
                <br />

            </div>
        );
    }
}