import React from 'react';
import { mergeSortAlgorithm, radixSortAlgorithm, quickSortAlgorithm } from './SortingAlgorithms'
import './NavBarSort.css';
import { SORT_NAVIGATION_BAR_HEIGHT } from './Constants';

export default class SortNavigationBar extends React.Component {

    state = {
        sort: "Merge Sort",
        sortSpeed: "Slow",
        parentRef: {
            refs: {

            }
        },
    }

    componentDidMount = () => {
        this.state.parentRef = this.props.parent()
    }

    mergeSort = () => {
        const refs = this.state.parentRef.refs
        mergeSortAlgorithm(refs, 0, Object.keys(refs).length - 1, 0)
    }

    radixSort = () => {
        const refs = this.state.parentRef.refs
        radixSortAlgorithm(refs, 0, Object.keys(refs).length - 1, 0, 9)
    }

    quickSort = () => {
        const refs = this.state.parentRef.refs
        quickSortAlgorithm(refs, 0, Object.keys(refs).length - 1, 0)
    }

    beginSort = () => {
        if (this.state.sort === "Merge Sort") {
            console.log("state is merge")
            //state is merge
            this.mergeSort()
        }
        else if (this.state.sort === "Bubble Sort") {
            console.log("state is bubbly")
            //state is bubble
        }else if (this.state.sort === "Radix Sort"){
            this.radixSort()
        }
        else {
            console.log("state is quickly sorting")
            //state is quick
            this.quickSort()
        }
    }

    switch_screen = () => {
        this.props.change_screen();
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
                        <option value="Radix Sort" style={{ color: "black" }}>Radix Sort</option>
                        <option value="Quick Sort" style={{ color: "black" }}>Quick Sort</option>
                    </select>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select value={this.state.sortSpeed} onChange={(event) => {
                        this.setState({
                            ...this.state,
                            sortSpeed: event.target.value
                        })
                    }}>
                        <option disabled selected style="Speed" style={{ color: "black" }}>Speed</option>
                        <option value="Slow" style={{ color: "black" }}>Slow</option>
                        <option value="Medium" style={{ color: "black" }}>Medium</option>
                        <option value="Fast" style={{ color: "black" }}>Fast</option>
                        <option value="Ultra" style={{ color: "black" }}>Ultra</option>
                    </select>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="button beginSort" onClick={() => { this.beginSort() }}>Begin Sort</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="button backScreen" onClick={() => { this.switch_screen() }}>Search Algorithms</button>

                </div>
                <br />

            </div>
        );
    }
}