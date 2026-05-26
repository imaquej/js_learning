/* Apprendre les classes en JavaScript et pratiquer le POO */

// Calcul de la moyenne des notes d'un élève
const moyenne = (notes) => {
    let sum = 0
    for (let note of notes) {
        sum = sum + note
    }
    return sum / notes.length
}

class Student {
    ecole = 'ESUPEC Cholet'
    _notes = []
    // Valeur propre à la classe 
    #secret = "Hello World!"

    constructor (firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    
    // Setter
    setNotes (notes) {
        this.notes = notes
    }
    /*
    set notes (values) {
        if(Array.isArray(values)) {   
            this._notes = values
        }
    }
    */

    // Getter
    get name () {
        return `${this.firstname} ${this.lastname}`
    }

    canPass () {
        if(moyenne(this.notes) >= Student.moyenne) {
            console.log("L'élève peut passer en deuxième année!")
        } else {
            console.log("Malheureusement l'élève n'a pas la moyenne pour passer en deuxième année!")
        }
    }

    static moyenne = 10
}

class SuperStudent extends Student {
    get name () {
        return 'Super ' + super.name
    }

    canPass () {
        return super.canPass() 
    }
}

const student1 = new Student('Jeremy', 'Imaque', [15, 20, 12, 19])
const student2 = new Student('Jane','Beauford', [12, 11, 14, 16])
const student3 = new Student('Eric', 'Boulet', [9, 8, 9, 10])
console.log(student1, student2)

/*
student1.notes = [15, 20, 12, 19]
student2.notes = [12, 11, 14, 16]
student3.notes = [9, 8, 9, 10]
*/

console.log(student1.canPass())
console.log(student2.canPass())
console.log(student3.canPass())