const Calculadora = require('./calculadora');

var somaCalculadora = Calculadora.soma(6, 3);
console.log('soma: ', somaCalculadora);

var subCalculadora = Calculadora.subtracao(6, 3);
console.log('subtração: ',subCalculadora);

var divCalculadora = Calculadora.divisao(6, 3);
console.log('divisão: ',divCalculadora);

var multCalculadora = Calculadora.multiplicacao(6, 3);
console.log('multiplicação: ', multCalculadora);

var potCalculadora = Calculadora.potencia(6, 3);
console.log('potencia: ', potCalculadora);

console.log('--------------------------------------');
console.log('demonstração quando se tem erro');

var somaCalculadora = Calculadora.soma(6, 'jjs');
console.log('soma: ', somaCalculadora);

var subCalculadora = Calculadora.subtracao(6, true);
console.log('subtração: ',subCalculadora);

var divCalculadora = Calculadora.divisao(6, 'dsfddsf');
console.log('divisão: ',divCalculadora);

var multCalculadora = Calculadora.multiplicacao(6, 'asdas');
console.log('multiplicação: ', multCalculadora);

var potCalculadora = Calculadora.potencia(6, false);
console.log('potencia: ', potCalculadora);