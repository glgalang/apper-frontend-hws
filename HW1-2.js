// In class, we wrote a queue class from scratch. For this homework, 
//implement a stack from scratch with the methods push, pop, and check 
//(similar to what we did in class). 
//An additional challenge is to add a function 
//called peek which returns the element at the top of the stack. 
//Again, whereas a queue follows FIFO, a stack follows Last In, First Out (LIFO).
// Another challenge would be to implement this without using JavaScript arrays. 
//Name this file HW1-2.js.

class Stack {
    constructor() {
        this.items = []
        this.stock = 0
    }

    //add element to the top of stack
    push(elem){
        this.items[this.stock] = elem
        console.log(`${elem}`)
        this.stock += 1
        return this.stock -1
    }
    pop(){
        if(this.stock == 0) return `Empty Stack`
        let removeItem = this.items[this.stock - 1]
        this.stock -= 1
        console.log(`${removeItem} removed from stack`)
        return removeItem
    }
    check(){
        console.log(this.items)
    }
    //check top element in stack
    peek(){
        console.log(`${this.items[this.count-1]}`)
        return this.items[this.count -1]
    }
}