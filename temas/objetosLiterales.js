const nombre = 'firulais';
const edad = 2;
const raza = 'callejero';

//Declarar objetos de forma abreviada, siempre y cuando coincidan variables con el mismo nombre en el mismo ambito
const perro = {
    nombre,
    edad,
    raza,
    //Se puede abreviar la declaracion de los metodos en estos objetos.
    ladrar(){
        console.log('guau guau');
    }

}


//Se puede utilizar la funcion
perro.ladrar();