// There is a queue for the self-checkout tills at the supermarket.
// Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.

// n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.

function queueTime(customers, n) {
	//create an array with length = n, initial state 0
  let tills = Array(n <= 0 ? 1 : n).fill(0);  
  customers.forEach(customer => {
		//find an index of min element in tills array
		const fastest = tills.indexOf(Math.min(...tills));
		//update value of min element in tills array = current value + current customer
    tills[fastest] += customer;
	});
	//total time is a max of tills array elements
  return Math.max(...tills);
}

module.exports = queueTime;