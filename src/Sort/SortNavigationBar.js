import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { mergeSortAlgorithm, radixSortAlgorithm, quickSortAlgorithm, bubbleSortAlgo } from './SortingAlgorithms'
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
    bubbleSort = () => {
        const refs = this.state.parentRef.refs
        bubbleSortAlgo(refs, 0, Object.keys(refs).length-1, 0)
    }
    radixSort = () => {
        const refs = this.state.parentRef.refs
        radixSortAlgorithm(refs, 0, Object.keys(refs).length - 1, 0, 9)
    }

    quickSort = () => {
        const refs = this.state.parentRef.refs
        quickSortAlgorithm(refs, 0, Object.keys(refs).length - 1, 0)
    }
    change_sort_algorithm = (sorty) => {
        this.setState({
            ...this.state,
            sort: sorty
        })
    }
    change_sort_speed = (speedy) => {
        this.setState({
            ...this.state,
            sortSpeed: speedy
        })
    }
    beginSort = () => {
        if (this.state.sort === "Merge Sort") {
            console.log("state is merge")
            //state is merge
            this.mergeSort()
        }
        else if (this.state.sort === "Bubble Sort") {
            console.log("state is bubbly")
            this.bubbleSort()
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
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="testing">
                        <Navbar.Brand className="testing3">Sorting Algorithms</Navbar.Brand>
                        <NavDropdown className="testing4" style={{ width: 100, marginLeft: 5, marginRight: 15 }} title={this.state.sort} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={ () => this.change_sort_algorithm("Merge Sort") }>Merge Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.change_sort_algorithm("Bubble Sort") }>Bubble Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.change_sort_algorithm("Radix Sort") }>Radix Sort</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.change_sort_algorithm("Quick Sort") }>Quick Sort</NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown className="testing5" style={{ width: 100, marginLeft: 15, marginRight: 5 }} title={this.state.sortSpeed} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={ () => this.change_sort_speed("Slow") }>Slow</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.change_sort_speed("Medium") }>Medium</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.change_sort_speed("Fast") }>Fast</NavDropdown.Item>
                            <NavDropdown.Item onClick={ () => this.change_sort_speed("Ultra") }>Ultra</NavDropdown.Item>
                        </NavDropdown>
                        
                        <Button style={{ marginLeft: 10, marginRight: 10 }} variant="dark" onClick={() => { this.beginSort() }}>Sort</Button>
                        <Button style={{ marginLeft: 10, marginRight: 10 }} variant="dark" onClick={() => { this.switch_screen() }}>Search Algorithms</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        );
    }
}