import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const NAVAGATION_BAR_HEIGHT = 100

//There needs to be 
//1) A drop down list of algorithms
//2) A button called Run to run the selected algorithm 
//3) the selected algorithm should be stored in the state
//4) A button that takes them to a different page for seeing graph algorithms (for now the button
// wont do anything, but it will be used for showing MST stuff instead of DFS and such)
// There should also be a button for taking them to the current thing (so they can be called 
// Search Algorithms and Graph Algorithms respectively). There should also be a button called sorting 
//algorithms
//5) There should be a square called start node that the user can click (and it should call a function that)
// can do nothing at the moment. I am thinking like a green dot in the middle of a 50x50 square
//6) similar a red node (a red dot)
//7) After all of this (or before doing this) you can also do the animation of the cells changing color
export class NavigationBar extends React.Component {
    state = {
        location: [
          {
            id: 0,
          title: 'Depth-first Search',
          selected: false,
          key: 'location'   
          },
          {
            id: 1,
            title: 'Breadth-first Search',
            selected: false,
            key: 'location'
          },
          {
            id: 2,
            title: 'Dijkstra',
            selected: false,
            key: 'location'
          }
        
        ]
    }

    render() {
        return (
            <div style={{ 
                width: '100%', 
                height: NAVAGATION_BAR_HEIGHT,
                backgroundColor: "silver",
            }}>


                Path Finding Visualizer         
 

                <div className="topnav" id="myTopnav">
                    <a href="#algos" class="active">Algorithms</a>
                    <Dropdown
                        title="test"
                        list={this.state.location}
                    />
                </div>
            </div>
        )
}
}