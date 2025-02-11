let students = ["Andaz","Saroj","Manoj","Aarav"];
// we want to print Hello before all students

//method 1 by using for loop
// let n = students.length;
// for(let i=0; i<n; i++){
// console.log("Hello",students[i]);
// }

// second method by using forEach method
students.forEach(s => console.log("Hello",s) // s is element of students
)