import React from 'react';

export const NAVAGATION_BAR_HEIGHT = 100

export class NavigationBar extends React.Component {
    state = {

    }


    render() {
        return (
            <div style={{ 
                width: '100%', 
                height: NAVAGATION_BAR_HEIGHT,
                backgroundColor: "silver",
            }}>
                Hello. I am the NavigationBar
                <p>
                    gegre
                </p>
                <button onClick={() => {console.log("do nothing")}}>Button1</button>
            </div>
        )
    }
}
