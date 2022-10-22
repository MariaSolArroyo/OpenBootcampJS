
 //- Una función sin parámetros que devuelva siempre "true"
    function positiva(){
        return true;
    }

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
 
    setTimeout(function(){
        console.log("Hola soy una promesa");
    },5000);
    

// - Una función generadora de índices pares automáticos

function* generaIdPares(){
    let id = 1;
    while (true){
        iddoble = id*2;
        if(id ===20){
            return id;
        }
        id++;
        yield iddoble ;

    }
}

const gen = generaIdPares();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
