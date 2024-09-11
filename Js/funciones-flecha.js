
let num1 = 11;
let num2 = 12;
let num3 = 13

const mayor = (num1,num2,num3 ) => {
    return (num1 >= num2 && num1 >= num3) ? num1 :
           (num2 >= num1 && num2 >= num3) ? num2 : num3;
};

let mayoR = mayor(num1,num2,num3 );

const equal = (num1,num2,num3) => {
    return (num1 === num2 && num2 === num3) ? "Los tres números son iguales" :
           ((num1 === num2 || num1 === num3 || num2 === num3) ? " (hay números iguales)" : "");
};
let equAl = equal(num1,num2,num3 );

document.write(mayoR);
document.write(equAl);