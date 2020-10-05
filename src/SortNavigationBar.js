import React from 'react';
import { mergeSortAlgorithm } from './SortingAlgorithms'

export const SORT_NAVIGATION_BAR_HEIGHT = 100;

export default class SortNavigationBar extends React.Component {

    state = {
        parentRef: {
            refs: {

            }
        },
    }

    componentDidMount = () => {
        console.log(this.props)
        console.log(this.props.parent())
        this.state.parentRef = this.props.parent()
    }

    mergeSort = () => {
        const refs = this.state.parentRef.refs
        let key
        for(key in refs){
            const temp_Stick = refs[key]
        }
        mergeSortAlgorithm(refs, 0, Object.keys(refs).length-1, 15)

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
                    <button onClick={() => { this.mergeSort()}}>
                        MergeSort
                    </button>
                </div>
                
                
            </div>
        );
    }
}