function calculator() {

    function calc() {
      
    }

    calc.add = (a, b) => a + b;
    calc.sub = (a, b) => a - b;
    calc.mul = (a, b) => a * b;
    calc.div = (a, b) => a / b;

    return calc;
}

const calc = calculator();

calc(); 
console.log(calc.add(5, 3)); 
console.log(calc.sub(5, 2)); 
console.log(calc.mul(8, 4)); 
console.log(calc.div(16, 4)); 
