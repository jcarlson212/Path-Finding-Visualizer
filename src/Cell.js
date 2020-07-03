import React from 'react';
import startnode from "./images/startnode.png";
import endnode from "./images/endnode.png";

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
        cellColor: this.props.cellColor,
        isStartNode: false,
        isEndNode: false,
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

    onDragOver = (event) => {
        event.preventDefault();
    }

    handleDrop = () => {
        console.log("dropped")
        console.log(this.props.endNodes)
        if(this.props.nodePressed.start_pressed){
            this.props.endNodes.startNode = [this.state.xCoord, this.state.yCoord]
            this.setState({
                ...this.state,
                isEndNode: false,
                isStartNode: true,
            })
            if(this.props.endNodes.start_ref !== null) {
                this.props.endNodes.start_ref.setState({
                    ...this.props.endNodes.start_ref.state,
                    isStartNode: false,
                });
                this.props.endNodes.start_ref = this 
            }else{
                this.props.endNodes.start_ref = this 
            }
            this.props.nodePressed.start_pressed = false
        }else if(this.props.nodePressed.end_pressed){
            this.props.endNodes.endNode = [this.state.xCoord, this.state.yCoord]
            this.setState({
                ...this.state,
                isStartNode: false,
                isEndNode: true,
            })
            if(this.props.endNodes.end_ref !== null) {
                this.props.endNodes.end_ref.setState({
                    ...this.props.endNodes.end_ref.state,
                    isEndNode: false,
                });
                this.props.endNodes.end_ref = this 
            }else{
                this.props.endNodes.end_ref = this 
            }
            this.props.nodePressed.end_pressed = false
        }
    }

    render(){
        if(!this.state.isStartNode){
            if(!this.state.isEndNode){
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
                    } onMouseEnter={() => this.changeColor(false)} onClick={() => this.changeColor(true)} onDrop={() => {this.handleDrop()}} onDragOver={(event) => this.onDragOver(event)} >
                    </div>
                )
            }else{
                //is end node
                return (
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
                        onDrop={() => {this.handleDrop()}} 
                        onDragOver={(event) => this.onDragOver(event)}
                        
                    >
                        <img src={endnode} width={CELL_WIDTH} height={CELL_WIDTH} alt="End"></img>
                    </div>
                )
            }
            
        }else{
            //is start node
            return (
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
                    onDrop={() => {this.handleDrop()}} 
                    onDragOver={(event) => this.onDragOver(event)}
                    
                >
                    <img src={startnode} width={CELL_WIDTH} height={CELL_WIDTH} alt="Start"></img>
                </div>
            )
        }
        
    }
}