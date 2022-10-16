//- La fecha de hoy
const fecha_hoy = new Date();
//- La fecha de tu nacimiento
const mifecha = new Date (1988,8,17);
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const mastarde = fecha_hoy>mifecha;
//- Una variable que contenga el día de tu nacimiento
const dia = mifecha.getDate()
//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = mifecha.getMonth()
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anio = mifecha.getFullYear()
