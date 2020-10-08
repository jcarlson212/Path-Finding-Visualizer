import { hashCoord } from './GridHelperFunctions';
import { Queue, Stack, PriorityQueue } from './DataStructures';
import { CELL_WIDTH } from './Cell';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const mergeSortAlgorithm = async (refs, start, end, speed) => {
    //refs[start].changeColor("green")
    if(start === end){
        return;
    }else if(start === (end - 1)){
        if(refs[start].props.height > refs[end].props.height){
            const temp = refs[start].props.height
            refs[start].changeHeight(refs[end].props.height)
            refs[end].changeHeight(temp)
        }
        return;
    }

    const mid = Math.floor((start + end) / 2)

    await mergeSortAlgorithm(refs, start, mid, speed)
    await sleep(speed);
    await mergeSortAlgorithm(refs, mid+1, end, speed)
    await sleep(speed);
    await merge(refs, start, mid, mid+1, end, speed)
    await sleep(speed);

}

const merge = async (refs, start1, end1, start2, end2, speed) => {
    console.log(start1, end2)
    let tempArr = []
    let current1 = start1
    let current2 = start2
    while(current1 <= end1 && current2 <= end2){
        if(refs[current1].props.height <= refs[current2].props.height){
            tempArr.push(refs[current1].props.height)
            current1++
        }else{
            tempArr.push(refs[current2].props.height)
            current2++
        }
    }

    while(current1 <= end1){
        tempArr.push(refs[current1].props.height)
        current1++
    }
    while(current2 <= end2){
        tempArr.push(refs[current2].props.height)
        current2++
    }

    //tempArr.forEach(v => console.log(v))
    tempArr.sort()
    for(let i = start1; i <= end2; i++){
        refs[i].changeHeight(tempArr[i - start1])
    }
}

