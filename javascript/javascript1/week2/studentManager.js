const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    alert("You cannot add an empty name to a class");
  } else {
    if (class07Students.indexOf(studentName) !== -1) {
      alert(`Student ${studentName} is already in the class`);
    } else {
      if (class07Students.length >= 6 && studentName !== "Queen") {
        alert("Cannot add more students to class 07");
      } else {
        class07Students.push(studentName);
      }
    }
  }
}
function getNumberOfStudents(studentName) {
  console.log(`Now you have ${class07Students.length} students in Class07.`);
}
addStudentToClass("tim");
addStudentToClass("");
addStudentToClass("andy");
getNumberOfStudents("andy");
addStudentToClass("amy");
addStudentToClass("amy");
addStudentToClass("pete");
addStudentToClass("Sam");
addStudentToClass("tom");
addStudentToClass("Queen");
getNumberOfStudents("Queen");
console.log(class07Students);
