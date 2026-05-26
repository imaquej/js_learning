# Programmation Orientée Objet avec JavaScript

**Semaine du :** 26 mai 2026

---

## Table des matières

1. [Qu'est-ce que la POO ?](#1-quest-ce-que-la-poo)
2. [Concepts clés](#2-concepts-cles)
3. [Objets et prototypes](#3-objets-et-prototypes)
4. [Classes (ES6+)](#4-classes-es6)
5. [Encapsulation](#5-encapsulation)
6. [Héritage](#6-heritage)
7. [Polymorphisme](#7-polymorphisme)
8. [Abstraction](#8-abstraction)
9. [Méthodes et propriétés statiques](#9-methodes-et-proprietes-statiques)
10. [Getters et Setters](#10-getters-et-setters)
11. [Exemples pratiques](#11-exemples-pratiques)

---

## 1. Qu'est-ce que la POO ?

La Programmation Orientée Objet (POO) est un paradigme de programmation qui organise le code autour d'**objets** plutôt que de fonctions et de logique. Un objet est un ensemble de données (propriétés) et de comportements (méthodes).

**Idée centrale :** Modéliser des entités du monde réel sous forme d'objets avec des attributs (données) et des comportements (fonctions).

---

## 2. Concepts clés

| Concept | Description |
|---------|-------------|
| **Objet** | Entité autonome avec des propriétés et des méthodes |
| **Classe** | Plan de construction pour créer des objets |
| **Encapsulation** | Regroupement des données et méthodes, masquage des détails internes |
| **Héritage** | Une classe qui dérive des propriétés d'une autre |
| **Polymorphisme** | Même interface, implémentations différentes |
| **Abstraction** | Masquage de l'implémentation complexe, exposition uniquement des fonctionnalités essentielles |

---

## 3. Objets et prototypes

### Littéral objet

```js
const person = {
  name: 'Alice',
  age: 30,
  greet() {
    console.log(`Bonjour, je suis ${this.name}`);
  }
};

person.greet(); // Bonjour, je suis Alice
```

### Fonction factory

```js
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Bonjour, je suis ${this.name}`);
    }
  };
}

const alice = createPerson('Alice', 30);
```

### Fonction constructeur (Avant ES6)

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Bonjour, je suis ${this.name}`);
};

const alice = new Person('Alice', 30);
```

### Chaîne de prototypes

Chaque objet JavaScript possède un `[[Prototype]]` interne (accessible via `__proto__` ou `Object.getPrototypeOf`). Lors de l'accès à une propriété, JS remonte la chaîne jusqu'à trouver la propriété ou `null`.

```js
console.log(alice.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
```

---

## 4. Classes (ES6+)

La syntaxe `class` est du sucre syntaxique par-dessus le système de prototypes.

### Classe de base

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Bonjour, je suis ${this.name}`);
  }
}

const alice = new Person('Alice', 30);
alice.greet(); // Bonjour, je suis Alice
```

### Expression de classe

```js
const Person = class {
  constructor(name) {
    this.name = name;
  }
};
```

---

## 5. Encapsulation

### Champs publics (ES2022+)

```js
class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

### Champs privés (ES2022+)

Les champs privés utilisent le préfixe `#` et sont véritablement privés (imposés par le moteur).

```js
class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount('Alice');
acc.deposit(100);
console.log(acc.getBalance()); // 100
// console.log(acc.#balance); // SyntaxError
```

### Méthodes privées (ES2022+)

```js
class Service {
  #validate(data) {
    return data !== null;
  }

  process(data) {
    if (this.#validate(data)) {
      console.log('Traitement en cours...');
    }
  }
}
```

---

## 6. Héritage

### Mot-clé `extends`

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} fait un bruit.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Appel du constructeur parent
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} aboie !`);
  }

  fetch() {
    console.log(`${this.name} rapporte la balle.`);
  }
}

const rex = new Dog('Rex', 'Labrador');
rex.speak(); // Rex aboie !
rex.fetch(); // Rex rapporte la balle.
```

### Surcharge de méthodes

Les classes enfant peuvent surcharger les méthodes parentes. Utilisez `super.methodName()` pour appeler la version parente.

```js
class Cat extends Animal {
  speak() {
    super.speak(); // "Whiskers fait un bruit."
    console.log(`${this.name} miaule !`);
  }
}
```

### Opérateur `instanceof`

```js
console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true
console.log(rex instanceof Object); // true
```

---

## 7. Polymorphisme

Le polymorphisme permet à différentes classes d'implémenter le même nom de méthode avec des comportements différents.

```js
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => console.log(shape.area()));

// 78.53981633974483
// 24
```

---

## 8. Abstraction

L'abstraction masque la complexité et expose uniquement ce qui est nécessaire.

```js
class CoffeeMachine {
  #waterLevel = 0;
  #grindBeans() {
    console.log('Mouture des grains...');
  }
  #heatWater() {
    console.log('Chauffage de l\'eau...');
  }

  makeCoffee() {
    this.#grindBeans();
    this.#heatWater();
    console.log('Café prêt !');
  }

  fillWater(amount) {
    this.#waterLevel += amount;
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee();
// Mouture des grains...
// Chauffage de l'eau...
// Café prêt !
```

---

## 9. Méthodes et propriétés statiques

Les membres statiques appartiennent à la classe elle-même, pas aux instances.

```js
class MathUtils {
  static PI = 3.14159;

  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.PI);       // 3.14159
console.log(MathUtils.add(2, 3)); // 5

const utils = new MathUtils();
console.log(utils.PI); // undefined
```

Les méthodes statiques sont couramment utilisées pour les fonctions utilitaires.

---

## 10. Getters et Setters

```js
class User {
  #password;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    if (!value.includes('@')) {
      throw new Error('Email invalide');
    }
    this._email = value;
  }

  set password(value) {
    if (value.length < 6) {
      throw new Error('Mot de passe trop court');
    }
    this.#password = value;
  }

  get hasPassword() {
    return this.#password !== undefined;
  }
}

const user = new User('alice@example.com');
console.log(user.email); // alice@example.com
// user.email = 'bad';   // Error: Email invalide
```

---

## 11. Exemples pratiques

### Exemple 1 : Liste de tâches

```js
class Todo {
  #tasks = [];

  addTask(title) {
    this.#tasks.push({ title, done: false });
  }

  completeTask(index) {
    if (this.#tasks[index]) {
      this.#tasks[index].done = true;
    }
  }

  listTasks() {
    this.#tasks.forEach((t, i) => {
      const status = t.done ? '[x]' : '[ ]';
      console.log(`${status} ${i + 1}. ${t.title}`);
    });
  }
}

const todo = new Todo();
todo.addTask('Étudier la POO en JS');
todo.addTask('Écrire la documentation');
todo.completeTask(0);
todo.listTasks();
// [x] 1. Étudier la POO en JS
// [ ] 2. Écrire la documentation
```

### Exemple 2 : Système de bibliothèque

```js
class Book {
  #available;

  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.#available = true;
  }

  get isAvailable() {
    return this.#available;
  }

  borrow() {
    if (!this.#available) return false;
    this.#available = false;
    return true;
  }

  returnBook() {
    this.#available = true;
  }
}

class Library {
  #books = [];

  addBook(book) {
    this.#books.push(book);
  }

  findBook(isbn) {
    return this.#books.find(b => b.isbn === isbn);
  }

  borrowBook(isbn) {
    const book = this.findBook(isbn);
    return book ? book.borrow() : false;
  }

  listAvailable() {
    return this.#books.filter(b => b.isAvailable);
  }
}
```

---

## Résumé

- Les **objets** sont les blocs de construction fondamentaux de la POO en JS
- Les **classes** sont des plans de construction introduites en ES6
- L'**encapsulation** utilise les champs privés `#` (ES2022)
- L'**héritage** utilise le mot-clé `extends`
- Le **polymorphisme** permet de surcharger les méthodes dans les sous-classes
- L'**abstraction** masque les détails d'implémentation
- La POO de JavaScript est basée sur les prototypes, mais la syntaxe `class` la rend familière aux développeurs de POO classique
