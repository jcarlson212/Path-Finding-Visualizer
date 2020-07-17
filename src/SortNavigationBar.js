import React from 'react';

export const SORT_NAVIGATION_BAR_HEIGHT = 100;

export default class SortNavigationBar extends React.Component {

    mergeSort = () => {

    }

    render() {
        return (
            <div style={{ 
                height: SORT_NAVIGATION_BAR_HEIGHT,
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <div style={{marginLeft: 5, margingRight: 5}}>
                    <h1>
                        Sorting Algorithms
                    </h1>
                </div>
                <div style={{marginLeft: 5, margingRight: 5}}>
                    <button onclick={() => { this.mergeSort()}}>
                        MergeSort
                    </button>
                </div>
                
                
            </div>
        );
    }
}