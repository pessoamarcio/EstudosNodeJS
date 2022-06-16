console.log(process.argv)

const param1 = process.argv.slice(2);
console.log(param1);

const nome = param1[0].split('=')[1];
const prof = param1[1].split('=')[1];

console.log(nome);
console.log(prof);