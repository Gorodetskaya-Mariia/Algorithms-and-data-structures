const rawData = [
  {
    id: 1,
    message: "Hello"
  },
  {
    id: 2,
    message: "world"
  },
  {
    id: 3,
    message: "map"
  },
  {
    id: 1,
    message: "!"
  },
  {
    id: 3,
    message: "reduce"
  }
];

//should be
const result = {
	id1: ["Hello", "!"],
	id2: ["world"],
	id3: ["map", "reduce"]
}

function convertObj(obj){
	let newObj = {};
	let ids = obj
		.map(item =>  item.id)
		.filter((value, index, array) => array.indexOf(value) == index);

	ids.map(item => {
		obj.map(i=>{
			if(item == i.id) {
				newObj["id" + item] ?  null : newObj["id" + item] = [];
				newObj["id" + item].push(i.message)
			}		
		});
	});
	return newObj;
}

module.exports = convertObj;