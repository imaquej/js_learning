/* Utilisation de conditions en JavaScript */
// faire des tests dans notre code

if(false) {
    console.log("Bonjour")
} else {
    console.log("Au revoir")
}

// Utiliser les conditions pour faire des comparaisons
const age = 22
if( age === 18) {
    console.log("Tu es majeur")
} else if(age > 18) {
    console.log("Tu es majeur depuis " + (age - 18) + " ans")
}

// D'autre comparaisons avec le conditions
let myname = "Jeremx"
let username = "Jeremx"

if(myname !== username)  {
    console.log("Votre prénom n'est pas le même que celui de votre compte")
} else {
    console.log("Bienvenue " + username)
}

// On vérifie si l'utilsateur a l'age requis pour avoir le permis de conduire
const age_user = 22
const pays = 'FR'
// Conditions groupées
/* 
VRAI et VRAI = VRAI
VRAI et FAUX  = FAUX
FAUX et FAUX = FAUX

VRAI ou FAUX = VRAI
VRAI ou VRAI = VRAI
FAUX ou FAUX = FAUX
*/
if((pays === 'FR' && age_user >= 18) || (pays ==='US' && age_user >= 16)) {
    console.log("Vous avez le droit de conduire une voiture!")
} else {
    console.log("Vous n'avez pas l'age requis pour conduire une voiture!")
}

// Mettre les comparaisons dans des varariables
const allowDriveInFrance = pays === 'FR' && age_user >= 18
const allowDriveInUs = pays ==='US' && age_user >= 16

// Utiliser les variables pour faire les comparaisons
if(allowDriveInFrance || allowDriveInUs) {
    console.log("Vous avez le droit de conduire une voiture!")
} else {
    console.log("Vous n'avez pas l'age requis pour conduire une voiture!")
}

// Utiliser else if
if(allowDriveInFrance) {
    console.log("Vous avez le droit de conduire en France!")
} else if(allowDriveInUs)  {
    console.log("Vous avez le droit de conduire au US!")
} else {
    console.log("Vous n'avez pas l'age requis pour conduire une voiture!")
}

// Conditions inverse
if(!allowDriveInFrance && !allowDriveInUs) {
    console.log("Vous n'avez pas l'age requis pour conduire!")
} else {
    console.log("Vous avez le droit de conduire une voiture!")
}

// Les switch cases
switch(pays) {
    case 'FR': 
        console.log("Vous êtes en France")
        break
    case 'US':
        console.log("Vous êtes aux US")
        break
    default:
        console.log("Vous êtes dans un autre pays")
}   

// Exercice avec les conditions
/* Recommandation de films : lilo et stich -> pour < 13 ans ; matrix -> entre 13 et 18 ans; evildeath -> >= 18 ans */
/*
const user_age = prompt("Quel est votre age ? ")
const lilo_stich = user_age <= 13
const matrix = user_age > 13 && user_age < 18
const evildeath = user_age >= 18

if(lilo_stich)  {
    console.log("Je vous recommande le film Lilo et Stich")
} else if(matrix) {
    console.log("Je vous recommande le film Matrix")
} else if(evildeath) {
    console.log("Je vous recommande le film Evil dead")
}
*/

// Avec l'année de naissance
/*
const year = 2026
const birth_year = prompt("Quelle est votre année de naissance ? ")
const user_age2 = year - birth_year

const lilo_stich2 = user_age2 <= 13
const matrix2 = user_age2 > 13 && user_age2 < 18
const evildeath2 = user_age2 >= 18

if(lilo_stich2)  {
    console.log("Je vous recommande le film Lilo et Stich")
} else if(matrix2) {
    console.log("Je vous recommande le film Matrix")
} else if(evildeath2) {
    console.log("Je vous recommande le film Evil dead")
}
*/

/* Comparaison de résultat : Négative ou positive */
const a = prompt("Entre un premier nombre : ")
const b = prompt("Entre un deuxième nombre : ")
const result = a * b

// Vérifier si result est bien un nombre$
if(isNaN(result)) {
    console.log("Veuillez entrer des nombres! Opération impossible!!")
} else {
    if(result > 0) {
        console.log("Le résultat est positif")
    } else {
        console.log("Le résultat est négatif")
    }
}
