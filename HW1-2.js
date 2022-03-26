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
        this.items = [];
        this.stock = 0;
    }

    //add element to the top of stack
    push(elem){
        if(typeof(elem) === "string"){
        this.items[this.stock] = elem
        console.log(`${elem} added to stack`)
        this.stock += 1
        return this.stock - 1
        }else{
            console.log(`Not a valid element`)
        }
    }
    pop(){
        if(this.stock == 0) return `Stack is Empty`
      
        let removeItem = this.items[this.stock-1]
        let cart = this.items
        let lastIn = this.stock-1
      
        cart.splice(lastIn,lastIn)
      
        if(this.stock === 1)
        cart.splice(0,1)
        this.stock -= 1
        console.log(`${removeItem} removed`)
        return removeItem
    }
    check(){
        console.log(this.items)
    }
    //check top element in stack
    peek(){
        console.log(`${this.items[this.stock-1]}`)
        return this.items[this.stock -1]
    }
    isEmpty() {
      let empty = (this.stock == 0 ? 'Stack is empty' : 'Stack is NOT empty')
    console.log(empty)
      return this.stock == 0
    }
}
const stack = new Stack()

stack.isEmpty()
console.log(stack)
stack.push(3)
stack.check()
stack.push("guitar")
stack.push("golfcart")
stack.push("bass")
stack.check()
console.log(stack)
stack.pop()
console.log(stack)
stack.push('hat')
stack.check()
console.log(stack)
stack.peek()
stack.pop()
stack.pop()
stack.check()
console.log(stack)
stack.pop()
stack.check()
stack.push('flowers')
stack.pop()
stack.check()
