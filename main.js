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
frutas.forEach((fruta, index) => {
  console.log(`Fruta #${index + 1}: ${fruta}`)
}) */


/* // Punto 14
let numeros = [5, 10, 15, 20, 25]

console.log(numeros)
for (let i = 0; i < numeros.length; i++) {
  console.log(`Número #${i + 1}: ${numeros[i]}`)
} */

// Punto 15: Crear un array de objetos (familia)
/* let familia = [
  { nombre: "Padre", edad: 40 },
  { nombre: "Madre", edad: 35 },
  { nombre: "Hijo", edad: 10 },
  { nombre: "Hija", edad: 8 },
  { nombre: "Abuelo", edad: 70 }
]

console.log(familia);
for (let i = 0; i < familia.length; i++) {
  console.log(`Miembro de la familia: ${familia[i].nombre}, Edad: ${familia[i].edad}`)
} */

/* // Punto 16
let textoAleatorio = `Me gusta comer ${frutas[1]} mientras sumo ${numeros[3]} y converso con ${familia[4].nombre}
 */
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