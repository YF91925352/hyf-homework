function getFullname(firstname, surname) {
  return firstname + surname;
}
const fullname1 = getFullname("Annie ", "Ernaux");
const fullname2 = getFullname("John ", "Clauser");
console.log(fullname1);
console.log(fullname2);

/* Formal fullname */

function getFormalFullname(firstname, surname, useFormalName) {
  if (useFormalName === true) {
    return "Lord " + firstname + surname;
  } else {
    return firstname + surname;
  }
}
const fullname3 = getFormalFullname("Ales ", "Bialiatski", false);
const fullname4 = getFormalFullname("Alain ", "Aspect");
const fullname5 = getFormalFullname("Alain ", "", false);
console.log(fullname3);
console.log(fullname4);
console.log(fullname5);

/* without useFormalName argument 
I set the default value of useFormalName true,so if  without useFormalName argument,it will be treated as useFormalName === true.
 */

/* works for women */
function getSexFormalFullname(firstname, surname, useFormalName, female) {
  if (useFormalName === true) {
    if (female === true) {
      return "Lady " + firstname + surname;
    } else {
      return "Lord " + firstname + surname;
    }
  } else {
    return firstname + surname;
  }
}
const fullname6 = getSexFormalFullname("Donna ", "Strickland", true, true);
console.log(fullname6);
/* change for the comment */
function getFullname(firstname, surname, useFormalName, gender) {
  if (useFormalName && gender === "male") {
    return `Lord ${firstname} ${surname}`;
  } else if (useFormalName && gender === "female") {
    return `Lady ${firstname} ${surname}`;
  } else {
    return `${firstname} ${surname}`;
  }
}
