const person = {
  firstName: "Max",
  age: 31,
  hobbies: ["Sport", "Cooking"],
  age: 32,
  greet() {
    console.log("Hi,I am " + this.firstName);
  },
};

console.log(person.age);
person.lastname = "林";
console.log(person);

delete person.age;
console.log(person);
person.greet();
