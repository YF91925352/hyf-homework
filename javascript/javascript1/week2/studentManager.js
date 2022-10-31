const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("You cannot add an empty name to a class");
  } else {
    if (class07Students.indexOf(studentName) !== -1) {
      console.log(`Student ${studentName} is already in the class`);
    } else {
      if (class07Students.length >= 6 && studentName !== "Queen") {
        console.log("Cannot add more students to class 07");
      } else {
        class07Students.push(studentName);
      }
    }
  }
}
function getNumberOfStudents() {
  console.log(`Now you have ${class07Students.length} students in Class07.`);
}
addStudentToClass("tim");
addStudentToClass("");
addStudentToClass("andy");
addStudentToClass("amy");
addStudentToClass("amy");
addStudentToClass("pete");
addStudentToClass("Sam");
addStudentToClass("tom");
addStudentToClass("Queen");
getNumberOfStudents();
