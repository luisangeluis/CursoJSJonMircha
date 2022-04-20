let cadena = 'Soy una cadena de texto';
let nombre = 'luis';
let lorem = "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley";

//Convierte a mayusculas el texto tambien hay para minusculas
console.log(nombre.toUpperCase());

/*Devuelve true or false si encuentra la cadena indicada*/
console.log(lorem.includes('dummy'));

//Quita los espacios en blanco a la cadena
console.log(lorem);
console.log(lorem.trim());


//Parte la cadena donde encuenta el caracter que le pases como argumento 
console.log(lorem.split(' '));