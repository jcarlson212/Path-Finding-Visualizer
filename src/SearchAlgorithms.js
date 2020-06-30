import { hashCoord } from './GridHelperFunctions';
import { Queue } from './DataStructures';
import { CELL_WIDTH } from './Cell';

export const breadthFirstSearch = (grid_map, start, end) => {
    //grid_map is an object mapping xcoord, ycoord pairs (made using the hash
    //function in GridHelperFunctions.js) to Cell objects (a reference to the object)
    //start is a starting cell coordinate (x,y)
    //end is a ending cell coordinate (x,y)
    //updates colors of cells manually as it explores them
    console.log(grid_map)
    let q = new Queue();
    q.push(start)
    if(start === end) {
        return;
    }
    let explored = {}
    explored[hashCoord(start[0], start[1])] = true
    while(!q.isEmpty()) {
        const currentNode = q.pop()
        let x = currentNode[0]+CELL_WIDTH;
        let y = currentNode[1];
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                q.push((x, y));
                explored = {
                    ...explored,
                    [hashCoord(x, y)]: true,
                }
                //make some visual effects here later
                console.log(grid_map[hashCoord(x, y)])
                if(grid_map[hashCoord(x, y)] !== undefined){
                    grid_map[hashCoord(x, y)].markExplored()
                }
                if((x, y) === end){
                    return;
                }
            }
        }
        x = currentNode[0]-CELL_WIDTH;
        y = currentNode[1];
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                q.push((x, y));
                explored = {
                    ...explored,
                    [hashCoord(x, y)]: true,
                }
                //make some visual effects here later
                console.log(grid_map[hashCoord(x, y)])
                if(grid_map[hashCoord(x, y)] !== undefined){
                    grid_map[hashCoord(x, y)].markExplored()
                }
                if((x, y) === end){
                    return;
                }
            }
        }

        x = currentNode[0];
        y = currentNode[1]+CELL_WIDTH;
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                q.push((x, y));
                explored = {
                    ...explored,
                    [hashCoord(x, y)]: true,
                }
                //make some visual effects here later
                console.log(grid_map[hashCoord(x, y)])
                if(grid_map[hashCoord(x, y)] !== undefined){
                    grid_map[hashCoord(x, y)].markExplored()
                }
                if((x, y) === end){
                    return;
                }
            }
        }

        x = currentNode[0];
        y = currentNode[1]-CELL_WIDTH;
        if(hashCoord(x, y) in grid_map){
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                //we explore it since it has not been found
                q.push((x, y));
                explored = {
                    ...explored,
                    [hashCoord(x, y)]: true,
                }
                //make some visual effects here later
                console.log(grid_map[hashCoord(x, y)])
                if(grid_map[hashCoord(x, y)] !== undefined){
                    grid_map[hashCoord(x, y)].markExplored()
                }
                if((x, y) === end){
                    return;
                }
            }
        }
    }
}