// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj = new ClassName("arg1","arg2");
// console.log(obj.prop1)
// console.log(obj.prop2)


// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog("Stuffy",2.3,"brown","german Shephard");
// console.log(dog.breed);
// console.log(dog.color);
// console.log(dog.weight);
// console.log(dog.dogName);

// ----------- THERE CAN BE ONLY ONE CONSTRUCTER IN A CLASS -------------
// class Person {
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname; 
//     }
// }
// let p= new Person("HArry");
// console.log(p.firstname);
// console.log(p.lastname);


// class Person {
//     constructor(firstname, lastname="patel"){
//         this.firstname = firstname;
//         this.lastname = lastname; 
//     }
// }
// let p= new Person("HArry");
// console.log(p.firstname);
// console.log(p.lastname);


//------------ METHODS ----------------- 
// function on class are called methods . when defining these methods we dont use function keyword , we directly start with the name.

// class Person {
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname; 
//     }
//     greet(){
//         console.log("hi there! I'm",this.firstname);
//     }
// }
// let p= new Person("Arsh","Bandari");
// p.greet();

// class Person {
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname; 
//     }
//     greet(){
//         console.log("hi there! I'm");
//     }
//     compliment(name,object){
//         return "This is beautiful "+object+ " , "+name;
//     }
// }
// let p= new Person("Arsh","Bandari");
// let compliment = p.compliment("harry","hat");
// console.log(compliment);
// let x=p.greet;
// console.log(x);


// -------------- PROPERTIES ---------------

// PRIVATE CLASS.....
// class Person{
//     #firstname;
//     #lastname;

//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
// }
// }
// let p= new Person("Arsh","Bandari");
// console.log(p.firstname);

// class Person{
//     #firstname;
//     #lastname;

//     constructor(firstname,lastname){
//         if(firstname.startWith("M")){
//             this.#firstname=firstname;
//         }
//         else{
//             this.#firstname="M"+firstname;
//         }
//         this.#lastname=lastname;
// }
// }
// let p= new Person("Arsh","Bandari");

//------------------- getter and setter --------------
// class Person{
//         #firstname;
//         #lastname;
    
//         constructor(firstname,lastname){
//             this.#firstname = firstname;
//             this.#lastname = lastname;
//         }
//         get firstname(){
//             return this.#firstname;
//         }
//         set firstname(firstname){
//             this.#firstname=firstname;
//         }
//         get lastname(){
//             return this.#lastname;
//         }
//         set lastname(lastname){
//             this.#lastname=lastname;
//         }
// }

// -------------- INHERITANCE ------------
// class Vehicle{
//     constructor(color, currentSpeed,maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move(){
//         console.log("moving at ",this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }
// class Motorcycle extends Vehicle{
//     constructor(color, currentSpeed,maxSpeed,fuel){
//         super(color,currentSpeed,maxSpeed);
//         this.fuel=fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }
// }
// let motor = new Motorcycle("Balck",0,250,"gasoline");
// console.log(motor.color);
// console.log(motor.currentSpeed);
// motor.accelerate(50);
// console.log(motor.currentSpeed);
// motor.move();

//----------- PROTOTYPES ------------