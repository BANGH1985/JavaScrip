
let NombreyApellido = prompt("Igrese Nombre y Apellido: ")
    alert ("Hola! " + NombreyApellido)

let HorasTrabajadas = parseInt(prompt("Ingrese Horas Trabajadas: "))

let horasExtra = HorasTrabajadas - 180

if (HorasTrabajadas > 180)  {
    alert ("Tenes: " + horasExtra + " " + "horas extra")
} else {
    (HorasTrabajadas < 180) 
    alert ("tenes: " + HorasTrabajadas + " " + " horas trabajadas")
}
let SueldoHora = 0

while ((SueldoHora <= 0) || (SueldoHora > 1900))
    SueldoHora = parseInt(prompt("Ingrese Sueldo por Hora: "))



let sueldoNormal = HorasTrabajadas * SueldoHora
let sueldoExtra = (horasExtra * SueldoHora) * 2
let sueldoBruto = sueldoExtra + sueldoNormal



console.log ("Señor/a: " + NombreyApellido)
console.log ("Trabajaste: " + HorasTrabajadas)
console.log ("Tenes: " + horasExtra + " " + "horas extra")
console.log ("Tu Sueldo por horas es: " + SueldoHora)
console.log ("Tu sueldo sin Extra es: " + sueldoNormal)
console.log ("Tu Sueldo Extra es: " + sueldoExtra) 
console.log ("Tu Sueldo Bruto  es: " + sueldoBruto)



