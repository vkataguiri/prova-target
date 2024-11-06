// Importa os dados de data.js
import { ex004Data as data } from './data.js';

function getHighest(data) {
	// Retorna o maior valor encontrado
	let highest = {
		dia: 0,
		valor: 0,
	};
	data.forEach((item) => {
		if (item.valor > highest.valor) {
			highest.dia = item.dia;
			highest.valor = item.valor;
		}
	});
	return highest;
}

function getLowest(data) {
	// Retirar os dias em que nao houve faturamento
	const sortedData = data.filter((item) => item.valor != 0);

	// Retorna o menor valor encontrado
	let lowest = getHighest(data);
	sortedData.forEach((item) => {
		if (item.valor < lowest.valor) {
			lowest.dia = item.dia;
			lowest.valor = item.valor;
		}
	});

	return lowest;
}

function getAvg(data) {
	// Retirar os dias em que nao houve faturamento
	const sortedData = data.filter((item) => item.valor != 0);

	// Calcular media
	let avg = 0;
	sortedData.forEach((item) => {
		avg += item.valor;
	});

	return (avg /= sortedData.length);
}

const lowest = getLowest(data);
const highest = getHighest(data);
const avg = getAvg(data);
let aboveAvgDays = 0;

data.forEach((item) => {
	if (item.valor > avg) {
		aboveAvgDays++;
	}
});

console.log(`O menor faturamento foi no dia ${lowest.dia}, com um valor de ${lowest.valor}.`);
console.log(`O maior faturamento foi no dia ${highest.dia}, com um valor de ${highest.valor}.`);
console.log(`O numero de dias em que o faturamento ultrapassou a media mensal foi de ${aboveAvgDays} dias.`);
