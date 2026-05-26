/* Apprendre à gérer les erreurs */

// On réutilise l'exercice sur les formes

class Rectangle {

    constructor (width, height) {
        if(width <= 0 || height <= 0) {
            throw new Error("Impossible d'avoir une forme avec des valeurs négatives!")
        }
        this.width = width
        this.height = height
    }

    get perimeter () {
        return (this.width + this.height) * 2
    }

    get isValid () {
        return this.width > 0 && this.height > 0
    }

    isBiggerThan (shape) {
        return this.perimeter > shape.perimeter
    }

}

class Square extends Rectangle {

    constructor (width) {
        super(width, width)
    }

}

class PromptError extends Error {

}

function promptRectangle() {
    try {
        const width = parseInt(prompt("Largeur : "), 10)
        const height = parseInt(prompt("Hauteur : "), 10)
        const r = new Rectangle(width, height)
        return r
    } catch(error) {
        throw new Error('Entrée utilisateur incorrecte!')
    }
}

try {
    promptRectangle()
} catch(error) {
    //console.log(error.message, {error})
    if(error instanceof PromptError) {
        console.log("Erreur de saisie!")
    } else {
        console.log("Erreur classique!")
    }
}

/*
try {
    const width = parseInt(prompt("Largeur : "), 10)
    const height = parseInt(prompt("Hauteur : "), 10)
    const r = new Rectangle(width, height)
    console.log(r.perimeter)
} catch(error) {
    console.log('Impossible de créer la forme!')
}
*/