// try{
// console.log('hola');
// A
// console.log('otro hola');

// }catch(error){
//     console.log(error.message);
// }finally{
//     console.log('bloque final');
// }

try {
    let num = 'hola';
    if (isNaN(num)) {
        throw new Error('El valor introducido no es un numero');
    }
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error.message}`);
}

