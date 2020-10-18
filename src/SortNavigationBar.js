import React from 'react';
import { mergeSortAlgorithm } from './SortingAlgorithms'
import './NavBarSort.css';

export const SORT_NAVIGATION_BAR_HEIGHT = 100;



export default class SortNavigationBar extends React.Component {

    state = {
        sort: "sort",

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
        for (key in refs) {
            const temp_Stick = refs[key]
        }
        mergeSortAlgorithm(refs, 0, Object.keys(refs).length - 1, 15)
    }



    /*          <div style={{ marginLeft: 5, margingRight: 5 }}>
  <button onClick={() => { this.mergeSort() }}>
      MergeSort
                  </button>
</div>
  */

    beginSort = () => {
        console.log(this.state.sort)

        if (this.state.sort === "Merge Sort") {
            console.log("state is merge")
            //state is merge
        }
        else if (this.state.sort === "Bubble Sort") {
            console.log("state is bubbly")
            //state is bubble
        }
        else {
            console.log("state is quickly sorting xd")
            //state is quick
        }

    }


    render() {
        return (
            <div style={{
                height: SORT_NAVIGATION_BAR_HEIGHT,
                display: "flex",
                backgroundColor: "rgb(23,213,213)",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <div style={{ marginLeft: 5, margingRight: 5 }}>
                    <a>
                        Sorting Algorithms
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select value={this.state.sort} onChange={(event) => {
                        this.setState({
                            ...this.sort,
                            sort: event.target.value
                        })
                    }}>
                        <option disabled selected style="Select Algo" style={{ color: "black" }}>Select Algo</option>
                        <option value="Merge Sort" style={{ color: "black" }}>Merge Sort</option>
                        <option value="Bubble Sort" style={{ color: "black" }}>Bubble Sort</option>
                        <option value="Quick Sort" style={{ color: "black" }}>Quick Sort</option>
                    </select>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="button beginSort" onClick={() => { this.beginSort() }}>Begin Sort</button>

                </div>
                <br />

            </div>
        );
    }
}