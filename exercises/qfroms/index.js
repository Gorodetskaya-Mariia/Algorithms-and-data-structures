// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');
const Stack1 = new Stack();
const Stack2 = new Stack();
class Queue {
	constructor(){
		this.Stack1 = new Stack();
		this.Stack2 = new Stack();
	}

	add(record){
		this.Stack1.push(record);
	}

	remove(){
		while(this.Stack1.peek()){
			const item = this.Stack1.pop();
			this.Stack2.push(item);
		}

		const record = this.Stack2.pop();

		while(this.Stack2.peek()){
			this.Stack1.push(this.Stack2.pop());
		}

		return record;
	}

	peek(){
		while(this.Stack1.peek()){
			const item = this.Stack1.pop();
			this.Stack2.push(item);
		}

		const record = this.Stack2.peek();

		while(this.Stack2.peek()){
			this.Stack1.push(this.Stack2.pop());
		}

		return record;
	}
}

module.exports = Queue;
