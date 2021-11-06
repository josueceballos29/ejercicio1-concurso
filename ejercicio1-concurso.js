function getTotalSum() {
	let numbers = [];
	for (let i = 1; i < 1000; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			numbers.push(i);
		}
	}
	let totalSum = numbers.reduce((acum,item) => acum += item);
	return totalSum;
}

console.log(getTotalSum());