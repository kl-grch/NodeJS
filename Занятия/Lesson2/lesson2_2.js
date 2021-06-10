function createStack(){
    let items = [];
    return {
        push(data){
            this.items.push(data);
        },
        pop(){
            return this.items.pop();
        }
    }
}

let stack = createStack();
stack.push("12");
stack.push("34");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);

class CreateStack{

	constructor(){
	}
    #items = []
	push(data){
		this.items.push(data);
	}
	pop(){
		return this.items.pop();
	}
}

let stack2 = new CreateStack();
stack2.push("12");
stack2.push("34");
console.log(stack2.pop());
console.log(stack2.pop());
console.log(stack2);