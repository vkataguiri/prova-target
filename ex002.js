function fibo(num) {
	if (num == 0) return 0;
	if (num == 1) return 1;
	return fibo(num - 1) + fibo(num - 2);
}

function isFibo(num) {
	for (let i = 0; i < num + 1; i++) {
		if (num == fibo(i)) return true;
	}
	return false;
}

let num = 15;
console.log(
	isFibo(num)
		? `O numero ${num} pertence a sequencia de Fibonacci.`
		: `O numero ${num} nao pertence a sequencia de Fibonacci.`
);
