import { hashCoord } from './GridHelperFunctions';
import { Queue, Stack, PriorityQueue } from './DataStructures';
import { CELL_WIDTH } from './Cell';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const radixSortAlgorithm = async (refs, start, end, speed, largest_bit) => {
    const audio = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3");
    audio.play()
    audio.loop = true


    let buckets = {
        '0': [],
        '1': [],
    }

    let i;
    for(i = 0; i <= largest_bit; i++){
        let j =start
        while(j <= end){
            if((refs[j].state.height >> i) & 1 === 1){
                buckets["1"].push(refs[j].state.height)
            }else{
                buckets["0"].push(refs[j].state.height)
            }
            j++;
        }

        j = start
        let bucket0_index = 0
        let bucket1_index = 0
        while(j <= end){
            if(bucket0_index < buckets["0"].length){
                refs[j].changeHeight(buckets["0"][bucket0_index])
                bucket0_index++
                refs[j].changeColor("red")
                await sleep(speed);
                refs[j].changeColor("black")
            }else{
                refs[j].changeHeight(buckets["1"][bucket1_index])
                bucket1_index++
                refs[j].changeColor("red")
                await sleep(speed);
                refs[j].changeColor("black")
            }
            j++;
        }

        buckets["0"] = []
        buckets["1"] = []
    }

    audio.pause()
}

export const mergeSortAlgorithm = async (refs, start, end, speed) => {
    let audio;
    if(start === 0 && end === Object.keys(refs).length - 1){
        audio = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3");
        audio.play()
        audio.loop = true
    }
    
    if(start >= end){
        return;
    }else if(start === (end - 1)){
        if(refs[start].state.height > refs[end].state.height){
            const temp = refs[start].state.height
            const temp2 = refs[end].state.height
            refs[start].changeHeight(temp2)
            await sleep(speed);
            refs[end].changeHeight(temp)
            await sleep(speed);
        }
        return;
    }

    const mid = Math.floor((start + end) / 2)

    await mergeSortAlgorithm(refs, start, mid, speed)
    await mergeSortAlgorithm(refs, mid+1, end, speed)
    await merge(refs, start, mid, mid+1, end, speed)

    if(start === 0 && end === Object.keys(refs).length - 1){
        audio.pause()
    }
}

const merge = async (refs, start1, end1, start2, end2, speed) => {
    let tempArr = []
    let current1 = start1
    let current2 = start2
    while(current1 <= end1 && current2 <= end2){
        if(refs[current1].state.height <= refs[current2].state.height){
            const val = refs[current1].state.height;
            tempArr.push(val)
            current1++
        }else{
            const val = refs[current2].state.height;
            tempArr.push(val)
            current2++
        }
    }

    while(current1 <= end1){
        tempArr.push(refs[current1].state.height)
        current1++
    }
    while(current2 <= end2){
        tempArr.push(refs[current2].state.height)
        current2++
    }

    for(let i = start1; i <= end2; i++){
        refs[i].changeHeight(tempArr[(i - start1)])
        refs[i].changeColor("red")
        await sleep(speed);
        refs[i].changeColor("black")
        await sleep(speed);
    }
}
/*
export const bubbleSortAlgo = async (z, zz) => {
    if (z === zz) {
        return;
    }
    else if (z === (zz - 1)) {
        //????
    }
}

//basic bubble sort todo: change heights

const bubble = async (swap) => {
    let initial = arrayTest => {
        let arrayTestSize = arrayTest.length;
        let swap;
        do {
            swap = false;
            for (let i = 0; i < arrayTestSize; i++) 
            {
                if (arrayTest[i] > arrayTest[i + 1]) 
                {
                    let tempArray = arrayTest[i];
                    arrayTest[i] = arrayTest[i + 1];
                    arrayTest[i + 1] = tempArray;
                    swap = true;
                }
            }
        }
        while (swap);
        return arrayTest;
    }
}
*/