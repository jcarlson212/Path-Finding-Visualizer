

export class Queue {

    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        if(this.isEmpty()){
            return null
        }
        return this.items.shift()
    }

    front() {
        if(this.isEmpty()){
            return null
        }
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }
}

export class PriorityQueue {
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item)
        console.log(item)
        this.heapifyUp(this.items.length-1)
    }

    heapifyUp = (index) => {
        if(index === 0) return
        if(this.items[index][1] < this.items[Math.floor((index - 1 ) / 2)][1]) {
            //move it up by swaping
            const temp = this.items[index]
            this.items[index] = this.items[Math.floor((index - 1 ) / 2)]
            this.items[Math.floor((index - 1 ) / 2)] = temp

            this.heapifyUp(Math.floor((index - 1 ) / 2))
        }
    }

    heapifyDown = (index) => {
        if(2*index +1 <= this.items.length -1){
            //has left child
            if(2*index+2 <= this.items.length-1){
                //has right child and left child
                if(this.items[2*index+1][1] < this.items[index][1]){
                    if(this.items[2*index+2][1] < this.items[2*index+1][1]){
                        //swap
                        const temp = this.items[2*index+2]
                        this.items[2*index+2] = this.items[index]
                        this.items[index] = temp

                        //recurse
                        this.heapifyDown(2*index+2)
                    }else{
                            //swap
                        const temp = this.items[2*index+1]
                        this.items[2*index+1] = this.items[index]
                        this.items[index] = temp

                        //recurse
                        this.heapifyDown(2*index+1)
                    }
                    
                }else if(this.items[2*index+2][1] < this.items[index][1]){
                    //swap
                    const temp = this.items[2*index+2]
                    this.items[2*index+2] = this.items[index]
                    this.items[index] = temp

                    //recurse
                    this.heapifyDown(2*index+2)
                }
            }else{
                //only has left child
                if(this.items[2*index+1][1] < this.items[index][1]){
                    //swap
                    const temp = this.items[2*index+1]
                    this.items[2*index+1] = this.items[index]
                    this.items[index] = temp

                    //recurse
                    this.heapifyDown(2*index+1)
                }
            }
        }else{
            //has no children
            return
        }
    }

    pop() {
        if(this.isEmpty()){
            return null
        }
        

        //maintain heap property
        const temp = this.items[0]
        this.items[0] = this.items[this.items.length-1]
        this.items[this.items.length-1] = temp
        
        const removedItem = this.items[this.items.length-1]
        this.items.length = this.items.length-1


        this.heapifyDown(0)

        return removedItem
    }

    front() {
        if(this.isEmpty()){
            return null
        }
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }
}

export class Stack {
    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item)
    }

    pop() {
        return this.items.pop()
    }

    top() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }
}