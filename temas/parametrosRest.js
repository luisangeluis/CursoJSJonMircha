

//Es cuando no sabes cuantos argumentos estará recibiendo una funcion
const sumar =(...a)=>{
    let result = 0;

    a.forEach(num =>{
        result+=num;
    })

    return result;
}

console.log(sumar(1,2,'a'));
console.log(sumar(1,2,3,4,6));
console.log(sumar(1));

//Spread operator

const array = [1,2,3];
//Con los tres puntos puedes acceder a cada uno de los elementos del arreglo
//En este caso obtienes acceso a cada uno y los agregas a array2 y asi unes 2 arrays rapido
 const array2 = [...array,10];

console.log(array2);
