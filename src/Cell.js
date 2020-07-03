import React from 'react';

export const CELL_WIDTH = 50;

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

export const green_grid_square = {
    position: "absolute",
    width: CELL_WIDTH,
    height: CELL_WIDTH,
    backgroundColor: 'green',
    borderWidth: 5,
    borderColor: 'black',
    borderStyle: 'solid',
}

export default class Cell extends React.Component {

    state = {
        xCoord: this.props.xCoord,
        yCoord: this.props.yCoord,
        cellColor: this.props.cellColor
    }

    //Makes the cell white
    clear = ()=>{
        this.setState({
            cellColor:"white",
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
        if(this.props.isMouseDown.mouseDown === true || isAClick) {
            if(this.state.cellColor === "white"){
                this.setState({
                    ...this.state,
                    cellColor: "black"
                });
            }else if(this.state.cellColor === "black"){
                this.setState({
                    ...this.state,
                    cellColor: "white"
                });
            }else{
                this.setState({
                    ...this.state,
                    cellColor: "white"
                });
            }
        }
    }

    handleDragOver = () => {
        if(this.props.nodePressed.start_pressed){
            this.props.endNodes.startNode = [this.state.xCoord, this.state.yCoord]
        }else if(this.props.nodePressed.end_pressed){
            this.props.endNodes.endNode = [this.state.xCoord, this.state.yCoord]
        }
    }

    render(){
        return (
            <div style={
                (this.state.cellColor === "white") ?
                    {
                        ...white_grid_square,
                        left: this.state.xCoord,
                        top: this.state.yCoord,
                    }
                :   
                    (this.state.cellColor === "green") ?
                    {
                        ...green_grid_square,
                        left: this.state.xCoord,
                        top: this.state.yCoord,
                    }
                    :
                    {
                        ...black_grid_square,
                        left: this.state.xCoord,
                        top: this.state.yCoord,
                    }
            } onMouseEnter={() => this.changeColor(false)} onClick={() => this.changeColor(true)} onDragOver={() => {this.handleDragOver()}} >
            </div>
        )
    }
}