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
        console.log(start, "reached", end)
        return;
    }
    let explored = {}
    explored[hashCoord(start[0], start[1])] = true
    if(grid_map[hashCoord(start[0], start[1])] !== undefined){
        console.log(grid_map[hashCoord(start[0], start[1])])
        grid_map[hashCoord(start[0], start[1])].markExplored()
    }
    while(!q.isEmpty()) {
        const currentNode = q.pop()
        console.log(currentNode[0],currentNode[1], "searching")
        let x = currentNode[0]+CELL_WIDTH;
        let y = currentNode[1];
        
        if(hashCoord(x, y) in grid_map){
            console.log(x,y, " is in the grid_map")
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                console.log(x,y, " is not in explored")
                //we explore it since it has not been found
                const newX = x
                const newY = y
                console.log("pushing", x,y)
                q.push([newX, newY]);
                explored = {
                    ...explored,
                    [hashCoord(newX, newY)]: true,
                }
                //make some visual effects here later
                if(grid_map[hashCoord(newX, newY)] !== undefined){
                    grid_map[hashCoord(newX, newY)].markExplored()
                }
                if(newX === end[0] && newY === end[1]){
                    console.log(start, "reached", end)
                    return;
                }
            }
        }

        x = currentNode[0]-CELL_WIDTH;
        y = currentNode[1];
        if(hashCoord(x, y) in grid_map){
            console.log(x,y, " is in the grid_map")
            //it exists
            //check if it has been explored
            if(hashCoord(x, y) in grid_map){
                console.log(x,y, " is in the grid_map")
                //it exists
                //check if it has been explored
                if(!(hashCoord(x, y) in explored)){
                    console.log(x,y, " is not in explored")
                    //we explore it since it has not been found
                    const newX = x
                    const newY = y
                    console.log("pushing", x,y)
                    q.push([newX, newY]);
                    explored = {
                        ...explored,
                        [hashCoord(newX, newY)]: true,
                    }
                    //make some visual effects here later
                    if(grid_map[hashCoord(newX, newY)] !== undefined){
                        grid_map[hashCoord(newX, newY)].markExplored()
                    }
                    if(newX === end[0] && newY === end[1]){
                        console.log(start, "reached", end)
                        return;
                    }
                }
            }
        }

        x = currentNode[0];
        y = currentNode[1]+CELL_WIDTH;
        if(hashCoord(x, y) in grid_map){
            console.log(x,y, " is in the grid_map")
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                console.log(x,y, " is not in explored")
                //we explore it since it has not been found
                const newX = x
                const newY = y
                console.log("pushing", x,y)
                q.push([newX, newY]);
                explored = {
                    ...explored,
                    [hashCoord(newX, newY)]: true,
                }
                //make some visual effects here later
                if(grid_map[hashCoord(newX, newY)] !== undefined){
                    grid_map[hashCoord(newX, newY)].markExplored()
                }
                if(newX === end[0] && newY === end[1]){
                    console.log(start, "reached", end)
                    return;
                }
            }
        }

        x = currentNode[0];
        y = currentNode[1]-CELL_WIDTH;
        if(hashCoord(x, y) in grid_map){
            console.log(x,y, " is in the grid_map")
            //it exists
            //check if it has been explored
            if(!(hashCoord(x, y) in explored)){
                console.log(x,y, " is not in explored")
                //we explore it since it has not been found
                const newX = x
                const newY = y
                console.log("pushing", x,y)
                q.push([newX, newY]);
                explored = {
                    ...explored,
                    [hashCoord(newX, newY)]: true,
                }
                //make some visual effects here later
                if(grid_map[hashCoord(newX, newY)] !== undefined){
                    grid_map[hashCoord(newX, newY)].markExplored()
                }
                if(newX === end[0] && newY === end[1]){
                    console.log(start, "reached", end)
                    return;
                }
            }
        }
    }
    console.log("queue became empty")
}