/* Création de variables en JavaScript */
const a = 3
let anotherdigit = 15
var myage = 22

const pi = 3.14

const myname = "Jérémy" // Or : 'Jérémy'

// Concaténation de chaînes de caractères
const name = "Jérémy"
const firstname = "Imaque"
const fullname = name + " " + firstname
console.log(fullname) // Affiche : Jérémy Imaque

// Type boolean
const isMajeur = true // or : false

// Type null
const nothingHere = null

// Type undefined
const notDefined = undefined // or : const = notDefined

// Tableaux
const notes = [12, 15, 18, 10]

// Tableau avec des types de données différents
const array = [1, "Hello", true, [12, 14, 20]]

console.log(array[1]) // Afficher une valeur du tableau 

// Type objet
const person = {
    lastname: "Jérémy",
    firstname: "Imaque",
    age: 22,
    isStudent: true,
    schoolName: "ESUPEC Sainte-Marie"
}
console.log(person.schoolName)
// Changement d'une valeur
person.age = 23
console.log(person.age)

// Avoir le type d'une variable ou d'un objet
console.log(typeof person)

// Avoir la taille d'une chaîne de caractères
console.log(name.length) // retourne : 6

// Faire des calculs avec des variables
const x = 10
const y = 50
let resultat = x + y // addition 
console.log(resultat) // Affiche : 60

let resultat1 = x * y // multiplication
console.log(resultat1) // Affiche : 500

let resultat2 = x / y // division 
console.log(resultat2) // Affiche : 0.2

let resultat3 = x - y // soustraction
console.log(resultat3) // Affiche : -40


