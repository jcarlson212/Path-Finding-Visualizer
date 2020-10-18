import React from 'react';

class Stick extends React.Component {
    state = {
        height: this.props.height,
        width: this.props.width,
        color: this.props.color,
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
            <div style={{
                height: this.state.height,
                width: ((this.state.width.toString()) + "%"),
                backgroundColor: this.state.color,
            }}>
            </div>
        )
    }

}

export default Stick;