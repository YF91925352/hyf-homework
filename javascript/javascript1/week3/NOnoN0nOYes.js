/* Save a note */
const notes = [];
function saveNote(content, id) {
  notes.push({ content, id });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Go swimming", 3);
saveNote(null, 4);
saveNote(NaN, 5);
saveNote(undefined, 6);
saveNote("Wash dishes", 7);
console.log(notes);

/* Get a note */
function getNote(element) {
  return element.id === 5;
}
const firstNote = notes.find(getNote);
console.log(firstNote);

/* Log out notes */
function logOutNotesFormatted() {
  for (let element of notes) {
    console.log(
      `The note with id:${element.id} , has the following note text: ${element.content}`
    );
  }
}
logOutNotesFormatted();

function filterByContent(valid, notes) {
  return valid
    ? notes.filter((element) => typeof element.content === "string")
    : notes.filter((element) => typeof element.content !== "string");
}
console.log(filterByContent(true, notes));
console.log(filterByContent(false, notes));
