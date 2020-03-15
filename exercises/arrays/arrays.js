// Task 1
const a1 = [1, 2, 3], a2 = a1;
a1[0] = 99;
console.log("task1",a2[0]);

// Task 2
const entries2 = ["a", "b", "c"];
console.log("task2",entries2[3]);

// Task 3
const entries3 = ["a", "b", "c"];
entries3.length = 1;
console.log("task3",entries3[1]);


// Task 4
const entries4 = ["a", "b", "c"];
console.log("task4",entries4.toString());

// Task 5
const entries5 = [];
entries5.push("a");
const len = entries5.push("b", "c");
console.log("task5",entries5.length);
console.log("task5", len);

// Task 6
const entries6 = ["a", "b", "c"];
console.log("task6", entries6.join("|"));

// Task 7
const entries7 = ["a", "b", "c", "d"];
const newEntries = entries7.slice(2);
console.log("task7", newEntries);

// Task 8
const entries8 = ["a", "b", "c", "d"];
entries8.splice(1, 2);
console.log("task8",entries8.toString());

// Task 9
const ratings = [4, 1, 3, 2, 10];
ratings.sort();
console.log("task9",ratings.toString());

// Task 10
const ratings10 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log("task10",ratings10.indexOf(3, 3));

// Task 11
const entries11 = ["a", "b", "c", "d"];
entries11.forEach((element, index, array) => {
array[index] = 1;
});
console.log("task11",entries11);

// Task 12
const entries12 = ["a", "b", "c", "d"];
const filtered = entries12.filter((e) => e === "a" || e === "d");
console.log("task12", filtered.toString());

// Task 13
const entries13 = ["a", "b", "c", "d"];
const result13 = entries13.every( (e) => {
	return e.length === 1;
});
console.log("task13",result13);

// Task 14
const priority = [1, 2, 3];
const priority10 = Array.from(priority, p => p * 10);
console.log("task14",priority10);

// Task 15
const priority15 = [1, 2, 3];
priority15.fill(100, 1, 2);
console.log("task15",priority15);

// Task 16
const priority16 = [1, 2, 3];
const result = priority16.find(elem => elem >= 3);
console.log("task16",result);

// Task 17
const priorityCodes = ["A", ..."BC", "D"];
console.log("task17", priorityCodes);

// Task 18
const priority18 = ["Low", "Normal"];
const [low, normal, high = "High"] = priority18;
console.log("task18",low);
console.log("task18",high);

// Task 19
function reviewHours([plan, actual]) {
	console.log("task19",actual);
}
reviewHours(["plH", "acH"]);

// Task 20
const [maxN, minN] = "90"; 
console.log("task20", `min: ${minN}, max: ${maxN}` );

// Task 21
const priority21 = new Set();
priority21.add("High").add("Low");
priority21.add("High");
console.log("task21", priority21.size);

// Task 22
const ids = new WeakSet([1, 2, 3]);//error, WeakSet holds only objects
console.log("task22",ids.size);

// Task 23
let task1 = { action: "Create…" };
const task2 = { action: "Delete…" };
const project = new WeakSet([task1, task2]);
task1 = null;
console.log("task23", project.has(task1));
