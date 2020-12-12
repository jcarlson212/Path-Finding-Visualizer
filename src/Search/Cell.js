import React from 'react';
import startnode from "../images/startnode.png";
import endnode from "../images/endnode.png";
import '../App.css'; //styles
import styled, { keyframes } from 'styled-components';
import { CELL_WIDTH } from './Constants';


const white_grid_square = {
    position: "absolute",
    width: CELL_WIDTH,
    height: CELL_WIDTH,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
}

const black_grid_square = {
    position: "absolute",
    width: CELL_WIDTH,
    height: CELL_WIDTH,
    backgroundColor: 'black',
    borderWidth: 5,
    borderColor: 'black',
    borderStyle: 'solid',
}

const Green_grid_squareKeyFrames = keyframes`
    0% {
        background-color: silver;
    }
    50% {
        background-color: mint;
    }
    100% {
        background-color: lime;
    }
`;


const Green_grid_square = styled.div`
    position: absolute;
    width: ${CELL_WIDTH}px;
    height: ${CELL_WIDTH}px;
    background-color: lime;
    border-width: 1px;
    border-color: black;
    border-style: solid;
    animation-name: ${Green_grid_squareKeyFrames};
    animation-duration: 2s;
    animation-timing-function: ease-out;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
`;


const Black_grid_squareKeyFrames = keyframes`
    0% {
        transform: scale(.3);
        background-color: silver;
        border-radius: 100%;
    }
    100% {
        background-color: black;
    }
`;


const Black_grid_square = styled.div`
    position: absolute;
    width: ${CELL_WIDTH}px;
    height: ${CELL_WIDTH}px;
    background-color: black;
    border-width: 1px;
    border-color: black;
    border-style: solid;
    animation-timing-function: ease-out;
    animation-name: ${Black_grid_squareKeyFrames};
    animation-duration: .5s;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
`;

export default class Cell extends React.Component {

    state = {
        xCoord: this.props.xCoord,
        yCoord: this.props.yCoord,
        cellColor: this.props.cellColor,
        isStartNode: false,
        isEndNode: false,
    }

    //Makes the cell white
    clear = () => {
        this.setState({
            cellColor: "white",
            xCoord: this.state.xCoord,
            yCoord: this.state.yCoord,
        })
    }


    //Makes the cell green
    markExplored = async () => {
        await this.setState({
            ...this.state,
            cellColor: "green",
        })
    }

    //Handles changing from black to white and vice-versa.
    changeColor = (isAClick) => {
        if (this.props.isMouseDown.mouseDown === true || isAClick) {
            if (this.state.cellColor === "white") {
                this.setState({
                    ...this.state,
                    cellColor: "black"
                });
            } else if (this.state.cellColor === "black") {
                this.setState({
                    ...this.state,
                    cellColor: "white"
                });
            } else {
                this.setState({
                    ...this.state,
                    cellColor: "white"
                });
            }
        }
    }

    //This is for some reason required for using the onDrop
    onDragOver = (event) => {
        event.preventDefault();
    }

    //helps create a start or end node when a start / end node is dropped onto this cell
    handleDrop = () => {
        if (this.props.nodePressed.start_pressed) {
            this.props.endNodes.startNode = [this.state.xCoord, this.state.yCoord]
            this.setState({
                ...this.state,
                isEndNode: false,
                isStartNode: true,
            })
            if (this.props.endNodes.start_ref !== null) {
                this.props.endNodes.start_ref.setState({
                    ...this.props.endNodes.start_ref.state,
                    isStartNode: false,
                });
                this.props.endNodes.start_ref = this
            } else {
                this.props.endNodes.start_ref = this
            }
            this.props.nodePressed.start_pressed = false
        } else if (this.props.nodePressed.end_pressed) {
            this.props.endNodes.endNode = [this.state.xCoord, this.state.yCoord]
            this.setState({
                ...this.state,
                isStartNode: false,
                isEndNode: true,
            })
            if (this.props.endNodes.end_ref !== null) {
                this.props.endNodes.end_ref.setState({
                    ...this.props.endNodes.end_ref.state,
                    isEndNode: false,
                });
                this.props.endNodes.end_ref = this
            } else {
                this.props.endNodes.end_ref = this
            }
            this.props.nodePressed.end_pressed = false
        }
    }

    create_start_node = () => (
        <div
            style={
                {
                    ...white_grid_square,
                    left: this.state.xCoord,
                    top: this.state.yCoord,
                }
            }
            onMouseEnter={() => this.changeColor(false)}
            onClick={() => this.changeColor(true)}
            onDrop={() => { this.handleDrop() }}
            onDragOver={(event) => this.onDragOver(event)}

        >
            <img src={startnode} width={CELL_WIDTH} height={CELL_WIDTH} alt="Start"></img>
        </div>
    );

    create_end_node = () => (
        <div
            style={
                {
                    ...white_grid_square,
                    left: this.state.xCoord,
                    top: this.state.yCoord,
                }
            }
            onMouseEnter={() => this.changeColor(false)}
            onClick={() => this.changeColor(true)}
            onDrop={() => { this.handleDrop() }}
            onDragOver={(event) => this.onDragOver(event)}

        >
            <img src={endnode} width={CELL_WIDTH} height={CELL_WIDTH} alt="End"></img>
        </div>
    )

    create_white_node = () => (
        <div style={
            {
                ...white_grid_square,
                left: this.state.xCoord,
                top: this.state.yCoord,
            }
        } onMouseEnter={() => this.changeColor(false)} onClick={() => this.changeColor(true)} onDrop={() => { this.handleDrop() }} onDragOver={(event) => this.onDragOver(event)}>

        </div>
    )

    create_green_node = () => (
        <Green_grid_square
            onMouseEnter={() => this.changeColor(false)}
            onClick={() => this.changeColor(true)}
            onDrop={() => { this.handleDrop() }}
            onDragOver={(event) => this.onDragOver(event)}
            left={this.state.xCoord}
            top={this.state.yCoord}
        />
    )

    create_black_node = () => (
        <div style={
            {
                ...black_grid_square,
                left: this.state.xCoord,
                top: this.state.yCoord,
            }
        } onMouseEnter={() => this.changeColor(false)} onClick={() => this.changeColor(true)} onDrop={() => { this.handleDrop() }} onDragOver={(event) => this.onDragOver(event)}>

        </div>
    )
    

    //renders a cell based on if it is a start node, end node, and its color.
    render = () => {
        if (!this.state.isStartNode) {
            if (!this.state.isEndNode) {
                if (this.state.cellColor === 'white') {
                    return this.create_white_node();
                } else if (this.state.cellColor === 'green') {
                    return this.create_green_node();
                } else if (this.state.cellColor === 'black') {
                    return this.create_black_node();
                }
            } else {
                //is end node
                return this.create_end_node();
            }
        }else {
            //is a start node cell
            return this.create_start_node();
        }
    }
}