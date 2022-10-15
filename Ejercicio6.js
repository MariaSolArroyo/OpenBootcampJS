



// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
var lista_compras = ["Leche","Azucar","Miel","Huevos","Manteca"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
lista_compras.push("Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista_compras.pop();

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const pelisfavoritas =[
    {titulo:"sinsajo",director:"Francis Lawrence",fecha:new Date("2014-1-15")},
    {titulo:"Avatar",director: "James Cameron",fecha:new Date("2010-03-02")},
    {titulo:"Titanic",director:"James Cameron",fecha:new Date("1998-12-12")}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pelisposteriores = pelisfavoritas.filter(obj => obj.fecha > new Date("2010-1-1"));

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = pelisfavoritas.map(valor =>  {return valor.director});

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = pelisfavoritas.map(valor => {
    return valor.titulo
});

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const titydirec = directores.concat(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const direcytitpropagados = [...directores,...titulos];