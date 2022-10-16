const datospersonales ={
    nombre:"Sol",
    apellido:"Arroyo",
    edad:34,
    altura:1.59,
    eresDesarrollador:true}
;

const edad =datospersonales.edad;

const listapersonal=[
    {
        nombre:"Sol",
        apellido:"Arroyo",
        edad:34,
        altura:1.59,
        eresDesarrollador:true},
        {
            nombre:"luis",
            apellido:"Cuchinelli",
            edad:29,
            altura:1.75,
            eresDesarrollador:false},
            {
                nombre:"Sole",
                apellido:"Aguirre",
                edad:37,
                altura:1.59,
                eresDesarrollador: false}
];

const listaordenada = listapersonal.sort((a,b) =>a.edad-b.edad);

