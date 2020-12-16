import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import startnode from "../images/startnode.png";
import endnode from "../images/endnode.png";
import './NavBar.css';
import { CELLS_PER_ROW, CELLS_PER_COL } from "../App";
import { hashCoord } from "./GridHelperFunctions";
import { breadthFirstSearch, AStarSearch, depthFirstSearch } from "./SearchAlgorithms";
import { NORMAL, FAST, SLOW, ULTRA, NAVIGATION_BAR_HEIGHT } from './Constants';

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
                let yCoord = 50 * j + NAVIGATION_BAR_HEIGHT
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
        this.props.nodePressed.start_pressed = true
        this.props.nodePressed.end_pressed = false
    }

    endNodePressed = () => {
        this.props.nodePressed.end_pressed = true
        this.props.nodePressed.start_pressed = false
    }

    run = () => {
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

    change_algorithm = (type) => {
        this.setState({
            ...this.state,
            algorithm: type
        })
    }

    change_speed = (new_speed) => {
        this.setState({
            ...this.state,
            speed: new_speed
        })
    }

    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="testing">
                        <Navbar.Brand className="testing2">Path Finding Visualizer</Navbar.Brand>
                        <NavDropdown style={{ width: 100, marginLeft: 10, marginRight: 10 }} title={this.state.algorithm} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={ () => this.change_algorithm("A*") }>A*</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.change_algorithm("DFS") }>DFS</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.change_algorithm("BFS") }>BFS</NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown style={{ width: 100, marginLeft: 10, marginRight: 50 }} title={this.state.speed} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={ () => this.change_speed("Slow") }>Slow</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.change_speed("Medium") }>Medium</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.change_speed("Fast") }>Fast</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.change_speed("Ultra") }>Ultra</NavDropdown.Item>
                        </NavDropdown>
                        <OverlayTrigger
                            key={0}
                            placement='bottom'
                            overlay={
                                <Tooltip id={`start`}>
                                Drag to starting position
                                </Tooltip>
                            }
                        >
                            <button class="button button1" draggable={true} onDragStart={() => { this.startNodePressed() }} ><img src={startnode} width="30" height="30"></img></button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key={1}
                            placement={'bottom'}
                            overlay={
                                <Tooltip id={`end`}>
                                Drag to ending position
                                </Tooltip>
                            }
                        >
                            <button class="button button2" draggable={true} onDragStart={() => { this.endNodePressed() }}><img src={endnode} width="40" height="30" /></button>
                        </OverlayTrigger>
                        <Button style={{ marginLeft: 15, marginRight: 15 }} variant="dark" onClick={() => { this.run() }}>Run</Button>
                        &nbsp;&nbsp;<Button style={{ marginLeft: 15, marginRight: 15 }} variant="dark" onClick={() => { this.clearBoard() }}>Clear Board</Button>
                        &nbsp;&nbsp;<Button style={{ marginLeft: 15, marginRight: 15 }} variant="dark" onClick={() => { this.changeScreen() }}>Sorting Algorithms</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        ) 
    }
};