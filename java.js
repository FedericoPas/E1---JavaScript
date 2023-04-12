console.log("HOLA FEDE");


function one (number){
    if ((number % 2)== 0){
        console.log(`${number} es par`)
    }
    else{
        console.log(`${number} es impar`)  
    };
}


function two (numberuno,numberdos){
    if (numberuno > numberdos){
        console.log(`${numberuno} es el mayor`)
    }
    else if (numberuno < numberdos){
        console.log(`${numberdos} es el mayor`)  
    }
    else{
        console.log(`${numberuno} y ${numberdos} son iguales`)  
    };
}


function four (number){
    for ( let i = 0; i <= number ; i++){
    console.log(i);
}
}


function five ( word , number ){
    for ( let i = 0; i < number ; i++){
    console.log(word);
    }
}
 

function six (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
      }
}

function seven(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) { 
        console.log(array[i]);
      }
    }
  }


function eight(array, numero) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * numero);
    }
  }



