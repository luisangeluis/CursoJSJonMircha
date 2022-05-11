const numbers = [1,2,3];

//Sin destructuring
//*****************
// let numberOne = numbers[0];
// let numberTwo = numbers[1];
// let numberThree = numbers[2];

// console.log(numberOne,numberTwo,numberThree);

//Con destructuring
//*****************
const [numberOne,numberTwo,numberThree] = numbers;

console.log(numberOne,numberTwo,numberThree);


const person={
    name: 'luis',
    lastName: 'zepeda',
    age: 20
}


//Otro ejemplo con destructuring
//Obtiene los valores del objeto en variables
//Estas deben llamarse igual.
let {lastName,age,name} = person;

console.log(name,lastName,age);
console.log(name);