

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