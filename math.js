const add = (a, b) => {
    return  a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b == 0) {
        return "Erro. A divisão por zero não é permitida."
    }
    return a / b;
}

module.exports = {add, subtract, multiply, divide};