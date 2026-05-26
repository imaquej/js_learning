/* Utiliser les boucles en JavaScript */
// Répéter une action un certain nombre de fois
let i = 0
// Boucle while : tant que la condition est vérifiée, le code à l'intérieur de la boucle est exécuté
while (i < 10) {
    console.log(i)
    i++
}
// Boucle for : permet de répéter une action un certain nombre de fois, en utilisant une variable de contrôle
for(let a = 0; a < 10; a++) {
    console.log("Bonjour " + a)
}
// Parcourir un tableau avec une boucle for
const notes = [12, 15, 20, 10, 14]
for(let increment = 0; increment < notes.length; increment++) {
    // console.log(notes[increment])
}
// Parcourir les index avec le for in -> le for in donne les index d'un tableau ou les clés d'un objet
for (let increment2 in notes) {
    // console.log(notes[increment2])
}

// Parcourir un objet
const note_student = {
    fr: 12,
    math: 18,
    eng: 14,
    dev: 19
}
for (let index in note_student) {
    // console.log(note_student[index])
} 

// Parcourir un tableau et obtenir que les valeurs avec for of
const person = {
    firstname: 'Jeremy',
    lastname: 'Imaque'
}
for(let note of notes) {
    // console.log(note)
}

// Obtenir chaques lettre d'un mot
const word = "Bonjour"
for(let letter of word) {
    // console.log(letter)
}

/* Exercice : demander à l'utilisateur un nombre entre 0 et 10. Si il entre bien un chiffre entre 0 et 10, afficher les nombres précédents; sinon afficher un message d'erreur */
/* 
let number = prompt("Entre un nombre entre 0 et 10: ")
const condition = number < 0 || number > 10
if(condition) {
    console.log("Erreur : le nombre doit être entre 0 et 10")
} else {
    // Avec une boucle while
    /*
    while(number >= 0) {
        console.log(number)
        number--
    }
    */
   // Avec une boucle for
   /*
   for(let compteur = number; compteur >= 0; compteur--) {
    console.log(compteur)
   }

}
*/

// Exercie : Trouver le nombre guess
let guess = 20
let user_guess
while(user_guess !== guess) {
    user_guess = prompt("Devine le ,nombre mystère : ") * 1
    if(user_guess < guess) {
        console.log("Mauvaise réponse, c'est plus!")
    } else if(user_guess > guess) {
        console.log("Mauvaise réponse, c'est moins!")
    }
}
console.log(`Bravo tu as trouvé le nombre mystère qui était ${guess}`)