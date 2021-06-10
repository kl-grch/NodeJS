//Сравнение стек и очередь

//Сравнение стек и очередь

let arr = [];

console.time("push 1000000");

for(let i = 0; i < 1000000; i++){
	arr.push(i);
}

for(let i = 0; i < 1000000; i++){
	arr.pop();
}

console.timeEnd("push 1000000");

let arr2 = [];

console.time("shift 1000000");

for(let i = 0; i < 1000000; i++){
	arr2.unshift(i);
}

for(let i = 0; i < 1000000; i++){
	arr2.shift();
}

console.timeEnd("shift 1000000");