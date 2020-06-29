import React from 'react';
import { hashCoord } from './GridHelperFunctions';
import { Queue } from './DataStructures';
import { CELL_WIDTH } from './Cell';

export const breadthFirstSearch = (grid_map, start, end) => {
    //grid_map is an object mapping xcoord, ycoord pairs (made using the hash
    //function in GridHelperFunctions.js) to Cell objects (a reference to the object)
    //start is a starting cell coordinate (x,y)
    //end is a ending cell coordinate (x,y)
    //updates colors of cells manually as it explores them
    let q = new Queue();
    q.push(start)
    if(start === end) {
        return;
    }
    let explored = {}
    explored[hashCoord(start[0], start[1])] = true
    while(!q.isEmpty()) {
        const currentNode = q.pop()
        if(grid_map[hashCoord(currentNode[0]+CELL_WIDTH, currentNode[1])] !== undefined){
            //it exists
            //check if it has been explored
            if(explored[hashCoord(currentNode[0]+CELL_WIDTH, currentNode[1])] === undefined){
                //we explore it since it has not been found
                q.push((currentNode[0]+CELL_WIDTH, currentNode[1]));
                explored = {
                    ...explored,
                    [hashCoord(currentNode[0]+CELL_WIDTH, currentNode[1])]: true,
                }
                //make some visual effects here later

                if((currentNode[0]+CELL_WIDTH, currentNode[1]) === end){
                    return;
                }
            }
        }

        if(grid_map[hashCoord(currentNode[0]-CELL_WIDTH, currentNode[1])] !== undefined){
            //it exists
            //check if it has been explored
            if(explored[hashCoord(currentNode[0]-CELL_WIDTH, currentNode[1])] === undefined){
                //we explore it since it has not been found
                q.push((currentNode[0]-CELL_WIDTH, currentNode[1]));
                explored = {
                    ...explored,
                    [hashCoord(currentNode[0]-CELL_WIDTH, currentNode[1])]: true,
                }
                //make some visual effects here later

                if((currentNode[0]-CELL_WIDTH, currentNode[1]) === end){
                    return;
                }
            }
        }

        if(grid_map[hashCoord(currentNode[0], currentNode[1]+CELL_WIDTH)] !== undefined){
            //it exists
            //check if it has been explored
            if(explored[hashCoord(currentNode[0], currentNode[1]+CELL_WIDTH)] === undefined){
                //we explore it since it has not been found
                q.push((currentNode[0], currentNode[1]+CELL_WIDTH));
                explored = {
                    ...explored,
                    [hashCoord(currentNode[0], currentNode[1]+CELL_WIDTH)]: true,
                }
                //make some visual effects here later

                if((currentNode[0], currentNode[1]+CELL_WIDTH) === end){
                    return;
                }
            }
        }

        if(grid_map[hashCoord(currentNode[0], currentNode[1]-CELL_WIDTH)] !== undefined){
            //it exists
            //check if it has been explored
            if(explored[hashCoord(currentNode[0], currentNode[1]-CELL_WIDTH)] === undefined){
                //we explore it since it has not been found
                q.push((currentNode[0], currentNode[1]-CELL_WIDTH));
                explored = {
                    ...explored,
                    [hashCoord(currentNode[0], currentNode[1]-CELL_WIDTH)]: true,
                }
                //make some visual effects here later

                if((currentNode[0], currentNode[1]-CELL_WIDTH) === end){
                    return;
                }
            }
        }
    }
}