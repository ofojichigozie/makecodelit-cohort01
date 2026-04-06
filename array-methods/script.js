/*
Talking about ARRAY METHODS (Higher Order Functions)

  1. forEach
  2. map
  3. filter
  4. find
  5. reduce
  6. some
  7. every
  8. sort
*/

const students = [
  {
    fullname: "Chima Okeke",
    department: "Computer Science",
    age: 20,
    height: 5.7,
    gender: "Male",
    weeklyStipend: 20000,
    isWorkingClass: true,
    regNum: null
  },
  {
    fullname: "Ahmed Bala",
    department: "Biochemistry",
    age: 27,
    height: 6.2,
    gender: "Male",
    weeklyStipend: 15000,
    isWorkingClass: false
  },
  {
    fullname: "Temi Olawole",
    department: "Biochemistry",
    age: 19,
    height: 5.5,
    gender: "Female",
    weeklyStipend: 25000,
    isWorkingClass: false
  },
  {
    fullname: "Olu Jacobs",
    department: "Computer Science",
    age: 24,
    height: 6.7,
    gender: "Male",
    weeklyStipend: 10000,
    isWorkingClass: false
  },
  {
    fullname: "Chioma Okafor",
    department: "Mass Communication",
    age: 28,
    height: 5.7,
    gender: "Female",
    weeklyStipend: 30000,
    isWorkingClass: true
  }
]

// forEach => loops through and DO SOMETHING eg update UI or console.log. 
// It doesnt return anything
students.forEach(function (student) {
  // console.log(student.fullname);
});

// map => loops through and return a new array of transformed element
const transformedStudents = students.map(function (student) {
  const innerStudent = { ...student };
  innerStudent.yearOfBirth = (new Date()).getFullYear() - innerStudent.age;
  innerStudent.fullname = innerStudent.fullname.toUpperCase();
  return innerStudent;
});
// console.log(transformedStudents);

// filter => loops through and return a new array that matches a condition
const filteredStudentd = students.filter(function (student) {
  return student.age > 25;
});
// console.log(filteredStudentd);

// find => loops through and return the first element matching a condition
const foundStudent = students.find(function (student) {
  return student.fullname.indexOf("Temi") !== -1;
});
// console.log(foundStudent);

// reduce => loops through and return a single accumulated value
const totalWeeklyStipend = students.reduce(function(accumulator, student){
  return accumulator + student.weeklyStipend;
}, 0);
console.log(totalWeeklyStipend.toLocaleString());