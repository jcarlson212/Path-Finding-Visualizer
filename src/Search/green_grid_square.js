import styled, { keyframes } from 'styled-components';
import { CELL_WIDTH } from './Constants';

const green_grid_squareKeyFrames = keyframes`
0% {
    background-color: red;
}
100% {
    background-color: aqua;
}
`;


const handleMouseEnter = () => this.changeColor(false)
const handleOnClick = () => this.changeColor(true)
const handleOnDrop = () => {this.handleDrop()}
const handleOnDragOver = (event) => this.onDragOver(event)

export const Green_grid_square = styled.div`
    position: absolute,
    width: ${CELL_WIDTH},
    height: ${CELL_WIDTH},
    background-color: aqua,
    border-width: 5,
    border-color: black,
    border-style: solid,
    animation-name: ${green_grid_squareKeyFrames};
    animation-duration: 2s;
    onmouseenter: ${handleMouseEnter};
    onclick: ${handleOnClick};
    ondrop: ${handleOnDrop};
    ondragover: ${handleOnDragOver};
`;

export default Green_grid_square;