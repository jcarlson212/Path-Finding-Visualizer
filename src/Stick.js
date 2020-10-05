import React from 'react';

class Stick extends React.Component {
    state = {
        height: this.props.height,
        width: this.props.width,
        color: this.props.color,
        xPosition: this.props.xPosition,
        yPosition: this.props.yPosition
    }

    changeHeight = (newHeight) => {
        this.setState({
            ...this.state,
            height: newHeight,
        })
    }

    changeColor = (newColor) => {
        this.setState({
            ...this.state,
            color: newColor,
        })
    }

    changeXCoord = (newXCoord) => {
        this.setState({
            ...this.state,
            xPosition: newXCoord
        })
    }

    changeYCoord = (newYCoord) => {
        this.setState({
            ...this.state,
            xPosition: newYCoord
        })
    }

    render() {
        return (
            <div>
                <div style={{
                    height: this.state.height,
                    width: this.state.width,
                    backgroundColor: this.state.color,
                    position: "absolute",
                    left: this.state.xPosition,
                    top: this.state.yPosition
                }}>

                </div>
            </div>
            
        )
    }

}

export default Stick;