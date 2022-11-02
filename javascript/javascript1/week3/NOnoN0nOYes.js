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
function getNote(id) {
  for (let element of notes) {
    if (id === element.id) {
      return element.content;
    }
  }
  return `error`;
}
const firstNote = getNote(5);
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

/* Unique feature */
let invalidContent = 0;
function filterByContent(item) {
  if (item.content) {
    return true;
  }
  invalidContent++;
  return false;
}
const notesByContent = notes.filter(filterByContent);
console.log(notesByContent);
console.log(invalidContent++);
