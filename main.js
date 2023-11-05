/* // Punto 1
let miNombre = "Andres"

// Punto 2
let miApellido = "Soto"

// Punto 3
let miEdad = 23

// Punto 4
let miMascota = "Neko"

// Punto 5
let edadMascota = 3

// Punto 6
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)
 */
// Punto 7
/* let nombreCompleto = miNombre + miApellido

// Punto 8
let textoPresentacion = "Hola, soy " + miNombre + " , tengo " + miEdad + " años y mi mascota se llama" + miMascota + " y tiene " + edadMascota + " años."

// Punto 9
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

console.log("Suma de edades: " + sumaEdades)
console.log("Resta de edades: " + restaEdades)
console.log("Producto de edades: " + productoEdades)
console.log("División de edades: " + divisionEdades) */

/* // Punto 10
miNombre = prompt("Ingresa tu primer nombre")
miApellido = prompt("Ingresa tu apellido")
miEdad = parseInt(prompt("Ingresa tu edad"))
miMascota = prompt("Ingresa el nombre de tu mascota")
edadMascota = parseInt(prompt("Ingresa la edad de tu mascota"))
 */

/* // Punto 11
let alumno = {
  nombre: "NombreAlumno",
  edad: 20,
  curso: "Curso11a",
  nota: 9.5,
  asistencia: true
} */

/* console.table(alumno)
console.log("Nombre del alumno: " + alumno.nombre)
console.log("Edad del alumno: " + alumno.edad)
console.log("Curso del alumno: " + alumno.curso)
console.log("Nota del alumno: " + alumno.nota)
console.log("Asistencia del alumno: " + alumno.asistencia) */

// Punto 12
/* let mascota = {
  nombre: "NombreMascota",
  especie: "Pelet
  edad: 3,
  color: "Marrón",
  vacunada: true
}

console.table(mascota)
console.log("Nombre de la mascota: " + mascota.nombre)
console.log("Especie de la mascota: " + mascota.especie)
console.log("Edad de la mascota: " + mascota.edad)
console.log("Color de la mascota: " + mascota.color)
console.log("¿Está vacunada la mascota?: " + mascota.vacunada)
 */
// Punto 13
/* let frutas = ["Manzana", "Banana", "Naranja", "Uva", "Pera"]

console.log("Array completo:")
console.log(frutas)

console.log("Elementos por separado:")

frutas.forEach(function(fruta, indice) {
  console.log("Fruta #" + (indice + 1) + ": " + fruta)
}) */



// Punto 14
/* let numeros = [10, 20, 30, 40, 50]

console.log("Array completo:")
console.log(numeros)

console.log("Elementos por separado:")

numeros.forEach(function(numero, indice) {
  console.log("Número #" + (indice + 1) + ": " + numero)
}) */

// Punto 15
/* let familia = [
  { nombre: "Padre", edad: 40 },
  { nombre: "Madre", edad: 38 },
  { nombre: "Hijo Mayor", edad: 15 },
  { nombre: "Hija Mayor", edad: 13 },
  { nombre: "Hijo Menor", edad: 8 }
];

console.log("Array completo:")
console.log(familia)

console.log("Elementos por separado:")

familia.forEach(function(persona, indice) {
  console.log("Persona #" + (indice + 1) + ": Nombre:" + (persona.nombre) + ", Edad:" + (persona.edad))
}) */

// Punto 16
/* let frutas = ["Manzana", "Banana", "Naranja", "Uva", "Pera"];
let numeros = [10, 20, 30, 40, 50];
let familia = [
  { nombre: "Padre", edad: 40 },
  { nombre: "Madre", edad: 38 },
  { nombre: "Hijo Mayor", edad: 15 },
  { nombre: "Hija Mayor", edad: 13 },
  { nombre: "Hijo Menor", edad: 8 }
];

let segundoElemento = frutas[1];
let cuartoElemento = numeros[3];
let quintoObjeto = familia[4];

let textoAleatorio = "Hoy comí " + (segundoElemento)+ " con " + (cuartoElemento) + " amigos, incluyendo a " +(quintoObjeto.nombre);

console.log(textoAleatorio); */

/* // Punto 17
let edadUsuario = parseInt(prompt("Ingresa tu edad"))
let edadCompanero = parseInt(prompt("Ingresa la edad de tu compañero"))

let edadesIguales = edadUsuario === edadCompanero
let soyMayor = edadUsuario > edadCompanero
let soyMenor = edadUsuario < edadCompanero

console.log("Mi edad es igual a la de mi compañero: " + edadesIguales)
console.log("Mi edad es mayor a la de mi compañero: " + soyMayor)
console.log("Mi edad es menor a la de mi compañero: " + soyMenor)
 */
/* // Punto 18
let soyMayorDeEdad = edadUsuario >= 18
console.log("Soy mayor de edad: " + soyMayorDeEdad)
 */
/* // Punto 19
let edadPersona = parseInt(prompt("Ingresa tu edad"))
let alturaPersona = parseInt(prompt("Ingresa tu altura en centímetros"))
let puedeSubir = edadPersona > 6 && alturaPersona >= 120
console.log("Puede subir a la atracción: " + puedeSubir)
 */
/* // Punto 20
let pasePersona = prompt("Ingresa tu pase (VIP, NORMAL o LIMITADO)")
let saldoPersona = parseFloat(prompt("Ingresa tu saldo disponible"))
let puedePasar = pasePersona === "VIP" || saldoPersona > 1000
console.log("La persona puede pasar: " + puedePasar)


 */