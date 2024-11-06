import { ex004Data as data } from './data.js'; // Importa os dados de data.js

function getTotalValue(data) {
	let totalValue = 0;
	data.forEach((item) => {
		totalValue += item.faturamento;
	});

	return totalValue;
}

function getPercentage(totalValue, state) {
	let statePercentage;
	statePercentage = state.faturamento / totalValue;

	return statePercentage;
}

let totalValue = getTotalValue(data);

data.forEach((item) => {
	let percentageString = Number(getPercentage(totalValue, item)).toLocaleString('PT-BR', {
		style: 'percent',
		minimumFractionDigits: 2,
	});
	console.log(`Estado: ${item.estado} / Contribuicao: ${percentageString}`);
});
