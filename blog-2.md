# TypeScript-এ OOP এর চারটি মূল ধারণা

## Introduction

বড় TypeScript project-এ code অনেক বড় হয়ে যায়, অনেক feature add হয়, আর একাধিক developer একসাথে কাজ করে। এই complexity manage করার জন্য Object-Oriented Programming (OOP)-এর চারটি মূল ধারণা খুবই গুরুত্বপূর্ণ: Inheritance, Polymorphism, Abstraction, এবং Encapsulation। এগুলো code organize করতে, duplicate কমাতে এবং maintain করা সহজ করতে সাহায্য করে।

## Inheritance

Inheritance ব্যবহার করে একটি class আরেকটি class-এর property এবং method reuse করতে পারে। এতে একই code বারবার লিখতে হয় না।

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Admin extends User {
  role: string;

  constructor(name: string) {
    super(name);
    this.role = "admin";
  }
}
```

এখানে `Admin` class, `User` থেকে logic reuse করছে। বড় project-এ এটা duplication কমায়।

## Polymorphism

Polymorphism মানে একই method different class-এ differentভাবে কাজ করতে পারে।

```ts
class Animal {
  makeSound() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}
```

এখানে `makeSound()` method একই, কিন্তু output আলাদা। এতে flexible code লেখা যায়।

## Abstraction

Abstraction মানে হলো unnecessary details hide করে শুধু প্রয়োজনীয় অংশ দেখানো।

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}

class CreditCardPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}
```

এখানে user জানে `pay()` method আছে, কিন্তু ভেতরের logic নিয়ে ভাবতে হয় না।

## Encapsulation

Encapsulation মানে data hide করে রাখা এবং controlled access দেওয়া।

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

এখানে `balance` direct access করা যাচ্ছে না, method ব্যবহার করে access করতে হচ্ছে। এতে data safe থাকে।

## Conclusion

Inheritance code reuse করে, Polymorphism flexibility দেয়, Abstraction complexity hide করে, আর Encapsulation data protect করে। এই চারটি ধারণা একসাথে বড় TypeScript project-কে organize করা, maintain করা এবং scalable করা সহজ করে।
