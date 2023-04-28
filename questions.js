// Given an array of objects, each object representing a person with a name and age property,
// write a function that returns a new array containing the names of all people who are 18 years old or older.

const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
  
  const ageAbove18 = arr => {
      const olderPeople = []
      arr.forEach(property => {
          if(property.age >= 18)
           olderPeople.push(property.name)
      });
      return olderPeople
  }
  console.log(ageAbove18(people))

//  Write a function that takes an array of objects, where each object represents a product with a name, price,
// and category property. The function should return an object that groups the products by their categories
//with the category names as keys and the arrays of products as values.
  const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];

function group(products){
    for (p in products){
        let A=[]
        let B=[]
        for (key in p){
         if (products.category=='Electronics') {
           A.push(products.p)
        }
        else{
          B.push(products.p)
        }
    }
    }
}
console.log(group(products));


//Given an array of objects, where each object represents a student with a name and an array of scores,
// write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
  const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];


const  averageScore= (students) => { 
    const olderThan85 = [];     
    students.forEach((student)  => {
      const { name, scores } = student;   
 
      let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      if (average >= 85) {
        olderThan85.push(name);
      }
    });
  
    return olderThan85 ;
  };
 console.log(averageScore(students));



// Given an object representing a car, with properties for the make, model, year, and a method to display the car's information,
// write a function that takes the car object and adds a new method to the object called age.
//The age method should return the current age of the car based on the current year and the car's year property.

const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};
const carAge = function(car) {
    let date = new Date()
    const thisYear = date.getFullYear()
    car.age=thisYear-car.year
    return car.age

}
console.log(carAge(car));




    

  
