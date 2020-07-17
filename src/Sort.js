import React from 'react';
import Stick from './Stick';

const NUMBER_OF_STICKS = 1000;
const MAX_STICK_HEIGHT = 500;

class Sort extends React.Component {
    state = {
        sticks: [

        ]
    }

    constructor() {
        super()
        for(let i =0; i < NUMBER_OF_STICKS; ++i){
            const p = i;
            this.state.sticks.push({
                color: "black",
                height: Math.floor(Math.random()*MAX_STICK_HEIGHT),
                width: 1,
                xPosition: i,
                yPosition: 0
            })
        }
    }


    render() {
        return (
            <div style={{height: "500px"}}>
                {this.state.sticks.map((stick) => <Stick color={stick.color} height={stick.height} width={stick.width} xPosition={stick.xPosition} yPosition={stick.yPosition} />)}
            </div>
        )
    }

}

export default Sort;