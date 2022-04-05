const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

test('CREATE - Caso válido', () => {
    const result = Validation.create({
        nome: "Superman",
        forca: 125,
        poder: "Voar",
        origem: "USA"
    });
    expect(result).toEqual(undefined);
});

test('CREATE - Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        forca: 130,
        poder: "Voar",
        origem: "USA"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('UPDATE - Caso válido', () => {
    const result = Validation.update({
        nome: "Superman",
        forca: 150,
        poder: "Raios Lazer",
        origem: "USA"
    });
    expect(result).toEqual(undefined);
});

test('UPDATE - Caso inválido - Retirando o nome', () => {
    const result = Validation.update({
        forca: 150,
        poder: "Raios Lazer",
        origem: "USA"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('DELETE - Caso válido', () => {
    const result = Validation.delete({
        nome: "Superman",
    });
    expect(result).toEqual(undefined);
});

test('DELETE - Caso inválido - Retirando o nome', () => {
    const result = Validation.delete({
        forca: 150,
        poder: "Raios Lazer",
        origem: "USA"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
