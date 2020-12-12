import React from 'react';
import Stick from './Stick';
import SortNavigationBar, { SORT_NAVIGATION_BAR_HEIGHT } from './SortNavigationBar';
import { hashCoord } from '../GridHelperFunctions';

const NUMBER_OF_STICKS = 500;
const MAX_STICK_HEIGHT = 800;

class Sort extends React.Component {

    state = {
        sticks: [

        ],
        
    }

    constructor() {
        super()
        for(let i =0; i < NUMBER_OF_STICKS; ++i){
            const p = i;
            this.state.sticks.push({
                color: "black",
                height: Math.floor(Math.random()*MAX_STICK_HEIGHT),
                width: (1 / NUMBER_OF_STICKS)*100,
                xPosition: i,
                yPosition: SORT_NAVIGATION_BAR_HEIGHT
            })
        }
    }

    componentDidMount() {
        this.state.refs = this.refs
        console.log(this.refs)
    }


    render() {
        return (
            <div>
                <SortNavigationBar hello={2} parent={() => this} change_screen={() => this.props.change_screen()} />
                <div style={{height: MAX_STICK_HEIGHT, display: "flex"}}>
                    {this.state.sticks.map((stick, index) => <Stick color={stick.color} height={stick.height} width={stick.width} xPosition={stick.xPosition} yPosition={stick.yPosition} ref={index.toString()} key={index} />)}
                </div>
            </div>
            
        )
    }

}

export default Sort;