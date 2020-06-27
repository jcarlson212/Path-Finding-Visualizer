import React from 'react';

const white_grid_square = {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  }
  
  const black_grid_square = {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: 'black',
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

    changeColor = () => {
        console.log("changed color called")
        if(this.state.cellColor === "white"){
            this.setState({
                ...this.state,
                cellColor: "black"
            })
        }else{
            this.setState({
                ...this.state,
                cellColor: "white"
            })
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
                    {
                        ...black_grid_square,
                        left: this.state.xCoord,
                        top: this.state.yCoord,
                    }
            } onMouseEnter={() => this.changeColor()}>
            </div>
        )
    }
}