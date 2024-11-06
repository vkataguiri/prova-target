let string = 'target';
let reversed = '';

for (let i = string.length; i > 0; i--) {
	reversed += string[i - 1];
}

console.log(reversed);
