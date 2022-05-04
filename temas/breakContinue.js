const numbers = [1,2,3,4,5,6,7,8,9];

for(i = 0; i<numbers.length;i++){
    if(i==5){
        break;
    }
    console.log(numbers[i]);
}

for(i = 0; i<numbers.length;i++){
    if(i==5){
        //Termina la iteracion actual y se salta la iteracion siguiente 
        continue;
    }
    console.log(numbers[i]);
}


