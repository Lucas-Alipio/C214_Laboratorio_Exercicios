const { isNumber } = require('validate.js');


const Calculadora = {
    soma(x, y) {
        is
        const validateX = isNumber(x);
        const validateY = isNumber(y);

        if(validateX == false || validateY == false){
            return 'Error';
        }

        var soma = x + y;
        return soma;
    },

    subtracao(x, y) {
        const validateX = isNumber(x);
        const validateY = isNumber(y);
        
        if(validateX == false || validateY == false){
            return 'Error';
        }

        var sub = x - y;
        return sub;
    },

    divisao(x, y) {
        const validateX = isNumber(x);
        const validateY = isNumber(y);
        
        if(validateX == false || validateY == false){
            return 'Error';
        }
        
        var div = x / y;
        return div;
    },

    multiplicacao(x, y) {
        const validateX = isNumber(x);
        const validateY = isNumber(y);
        
        if(validateX == false || validateY == false){
            return 'Error';
        }

        var mult = x * y;
        return mult;
    },

    potencia(x, y) {
        const validateX = isNumber(x);
        const validateY = isNumber(y);
        
        if(validateX == false || validateY == false){
            return 'Error';
        }

        var pot = x ** y;
        return pot;
    }
};

module.exports = Calculadora;