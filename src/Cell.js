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

    markExplored = () => {
        console.log("marked")
        this.setState({
            ...this.state,
            cellColor: "green",
        })
    }

    changeColor = (isAClick) => {
        console.log("changed color called")
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
                    cellColor: "geen"
                });
            }
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
                    (this.state.color === "green") ?
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
            } onMouseEnter={() => this.changeColor(false)} onClick={() => this.changeColor(true)}>
            </div>
        )
    }
}