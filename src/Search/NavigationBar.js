import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
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

export class NavigationBar extends React.Component{
    
    state = {
        isDragging: false,

        originalX: 0,
        originalY: 0,

        translateX: 0,
        translateY: 0,

        lastTranslateX: 0,
        lastTranslateY: 0,
        algorithm: "BFS",
        speed: "Medium",
    }
    componentDidMount(){

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

    changeScreen = () => {
        this.props.change_screen();
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

    change_algorithm = (type) => {this.setState({
        ...this.state,
        algorithm: type
    })}

    change_speed = (new_speed) => {
        this.setState({
            ...this.state,
            speed: new_speed
        })
    }

render()
{
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="testing">
    <Navbar.Brand className="testing2" href="#home">Path Finding Visualizer</Navbar.Brand>
      <NavDropdown title={this.state.algorithm} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={ () => this.change_algorithm("A*") }>A*</NavDropdown.Item>
        <NavDropdown.Item onClick={ () => this.change_algorithm("DFS") }>DFS</NavDropdown.Item>
        <NavDropdown.Item onClick={ () => this.change_algorithm("BFS") }>BFS</NavDropdown.Item>
    

      </NavDropdown>
      
      <NavDropdown title={this.state.speed} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={ () => this.change_speed("Slow") }>Slow</NavDropdown.Item>
        <NavDropdown.Item onClick={ () => this.change_speed("Medium") }>Medium</NavDropdown.Item>
        <NavDropdown.Item onClick={ () => this.change_speed("Fast") }>Fast</NavDropdown.Item>
        <NavDropdown.Item onClick={ () => this.change_speed("Ultra") }>Ultra</NavDropdown.Item>
        </NavDropdown>
        Drag to starting position:
        <button class="button button1" draggable={true} onDragStart={() => { this.startNodePressed() }} ><img src={startnode} width="30" height="30"></img></button>
        Drag to ending position:
        <button class="button button2" draggable={true} onDragStart={() => { this.endNodePressed() }}><img src={endnode} width="40" height="30" /></button>
        <Button className="button3" variant="dark" onClick={() => { this.run() }}>Run</Button>
        &nbsp;&nbsp;<Button className="button4" variant="dark" onClick={() => { this.clearBoard() }}>Clear Board</Button>
        &nbsp;&nbsp;<Button className="button5" variant="dark" onClick={() => { this.changeScreen() }}>Sorting Algorithms</Button>
    
    
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
    
}
};