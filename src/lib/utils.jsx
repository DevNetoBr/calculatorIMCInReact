export function formatNumber(number, digits=2) {
    let newNumber = number;
    if(!Number.isInteger(number)) newNumber = number.toFixed(digits);
    return newNumber.toLocaleString();;
}