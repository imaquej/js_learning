/* Les fonctions avec JavaScript */
/*
function canDrive(age, pays) {
    if((age >= 18 && pays === 'FR') || (age >= 16 && pays === 'US')) {
        return true
    }
    return false
}
*/

// Une aute manière de créer la même fonction
const canDrive = function(age, pays) {
    if((age >= 18 && pays === 'FR') || (age >= 16 && pays === 'US')) {
        return true
    }
    return false 
}
  
console.log(canDrive(22, 'FR'))

// Créer une fonction qui prend en paramètre un nom et retour le nom passé en paramètre
const name = function(name) {
    console.log(`Bonjour ${name}`)
}

name('Jérémy')
name("John")

// Une autre syntaxe
function myFunction() {
    console.log(this)
}
myFunction.call("Bonjour tout le monde")
myFunction.call(10)

// Une fonction dans un objet => une méthode
const person = {
    firstname: "Jérémy",
    lastname: "Imaque",
    fullname: function ()  {
        console.log(`${this.firstname} ${this.lastname}`)
    }
}
person.fullname()
console.log("Hello".toUpperCase())

// Les fonctions fléchées
const myFunction2 = (parm1, parm2) => {
    console.log(parm1, parm2)
}

myFunction2("Hello", "World")

const somme = (a, b) => {
    return a + b
}

// Vérifié si un nombre est pair 
const isPair = function (a, fn) { // fn est une fonction de rappel (callback)
    if( a % 2 === 0) {
        fn()
    } else {
        console.log("Mon nombre est impair")
    }
}
isPair(7, function() {
    console.log("Mon nombre est pair")
})

/* Exercice sur les fonctions */
// On crée un nombre aléatoire entre 0 et 10
// 3 essaie pour devnier le mot
// IsRight(n)
// guess() --> true or false
/*
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1))
}
const solution = getRandomInt(10)
console.log(solution)
function isRight(n) {
    return solution === n
}

function guess() {
    const number_guess = prompt("Entrez un chiffre : ") * 1
    return isRight(number_guess)
}

for (i = 0; i < 3; i++) {
    if(guess()) {
        console.log("Bravo, vous avez trouvé la solution!")
        break
    } else if (i === 2) {
        console.log("Désolé, vous avez perdu! La solution était : " + solution)
    }
} 
*/

// Savoir si un nombre est premier
function isPremier(n) {
    if(n <= 1) {
        return false
    }
    for(let i = n - 1; i > 1; i--) {
        if(n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPremier(12)) 