export function calculationIMC(weight, height) {
    return weight/(height*height);
}
export function IMCResult(imc) {
    let result;

    switch (true) {
        case imc < 17:
            result = "Muito abaixo do peso";
            break;
        case imc >= 17 && imc < 18.5:
            result = "Abaixo do peso";
            break;
        case imc >= 18.5 && imc < 24.9:
            result = "Peso normal";
            break;
        case imc >= 25 && imc < 29.9:
            result = "Sobrepeso";
            break;
        case imc >= 30 && imc < 34.9:
            result = "Obesidade grau 1";
            break;
        case imc >= 35 && imc < 39.9:
            result = "Obesidade grau 2 (severa)";
            break;
        case imc >= 40:
            result = "Obesidade grau 3 (mórbida)";
            break;
        default:
            result = "IMC inválido";
    }

    return result;
}
