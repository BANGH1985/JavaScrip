
let nombreApellido = prompt("Igrese Nombre y Apellido: ")

let patron = /^[a-zA-Z\s]+$/

if (patron.test(nombreApellido)) {
    alert ("hola " + nombreApellido)
} 
while ((nombreApellido === "") || !isNaN(nombreApellido))
    nombreApellido = prompt("Igrese Nombre y Apellido: ")



let horasTrabajadas = parseInt(prompt("Ingrese Horas Trabajadas: "))

while ((horasTrabajadas == null) || /\D/.test(horasTrabajadas) || (horasTrabajadas == ""))
    horasTrabajadas = parseInt(prompt("Ingrese Horas Trabajadas: "))

let horasExtra = 0

if (horasTrabajadas > 180) {
    horasExtra = (horasTrabajadas - 180)
    alert ("Tenes: " + horasExtra + " " + "horas extra")
} 
else { 
    (horasTrabajadas < 180)
    alert ("tenes: " + horasTrabajadas + " " + " horas trabajadas")
}
let sueldoHora = 0

while ((sueldoHora <= 0) || (sueldoHora > 1900) || /\D/.test(sueldoHora) || sueldoHora == "")
    sueldoHora = parseInt(prompt("Ingrese Sueldo por Hora: "))

let sueldoNormal = horasTrabajadas * sueldoHora
let sueldoExtra = (horasExtra * sueldoHora) * 2
let sueldoBruto = sueldoExtra + sueldoNormal

alert ("Señor/a: " + nombreApellido + "\n" + "Trabajaste: " + horasTrabajadas + "\n" + "Tenes: " + horasExtra + " " + "horas extra" + "\n" + "Tu Sueldo por Hora es: " + sueldoHora + "\n" + "Tu sueldo sin Extra es: " + sueldoNormal + "\n" + "Tu Sueldo Extra es: " + sueldoExtra+ "\n" + "Tu Sueldo Bruto  es: " + sueldoBruto)



console.log ("Señor/a: " + nombreApellido)
console.log ("Trabajaste: " + horasTrabajadas)
console.log ("Tenes: " + horasExtra + " " + "horas extra")
console.log ("Tu Sueldo por horas es: " + sueldoHora)
console.log ("Tu sueldo sin Extra es: " + sueldoNormal)
console.log ("Tu Sueldo Extra es: " + sueldoExtra) 
console.log ("Tu Sueldo Bruto  es: " + sueldoBruto)



