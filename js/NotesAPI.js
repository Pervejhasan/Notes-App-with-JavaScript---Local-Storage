// export default class NotesAPI {
//   static getAllNotes() {
//     const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

//     return notes.sort((a, b) => {
//       return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
//     });

//     /*const points = [40, 100, 1, 5, 25, 10];
//     document.getElementById("demo1").innerHTML = points;

//     points.sort(function(a, b){return a - b});
//     document.getElementById("demo2").innerHTML = points;
// */
//   }

//   static saveNotes(noteToSave) {
//     const notes = NotesAPI.getAllNotes();

//     const existing = notes.find((note) => note.id == noteToSave.id);
//     //edit or update
//     if (existing) {
//       existing.title = noteToSave.title;
//       existing.body = noteToSave.body;
//       existing.updated = new Date().toISOString();
//     } else {
//       noteToSave.id = Math.floor(Math.random() * 1000000);
//       noteToSave.updated = new Date().toISOString();
//       notes.push(noteToSave);
//     }

//     /*====================================
//     toISOString() method is used to convert the given date object's contents into a string in ISO format (ISO 8601) i.e, in the form of (YYYY-MM-DDTHH:mm:ss. sssZ or ±YYYYYY-MM-DDTHH:mm:ss. sssZ). The date object is created using date() constructor.

// Parameters: This method does not take any parameter. It is just used along with a Date object created using Date() constructor.

// Return Values: It returns the converted string of Date() constructor contents into ISO format (ISO 8601).

//     =======================================*/

//     localStorage.setItem("notesapp-notes", JSON.stringify(notes));
//   }

//   static deleteNotes(id) {
//     const notes = NotesAPI.getAllNotes();
//     const newNotes = notes.filter((note) => note.id != id);

//     localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
//   }
// }

export default class NotesAPI {
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

    return notes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }

  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes();
    const existing = notes.find((note) => note.id == noteToSave.id);

    // Edit/Update
    if (existing) {
      existing.title = noteToSave.title;
      existing.body = noteToSave.body;
      existing.updated = new Date().toISOString();
    } else {
      noteToSave.id = Math.floor(Math.random() * 1000000);
      noteToSave.updated = new Date().toISOString();
      notes.push(noteToSave);
    }

    localStorage.setItem("notesapp-notes", JSON.stringify(notes));
  }

  static deleteNote(id) {
    const notes = NotesAPI.getAllNotes();
    const newNotes = notes.filter((note) => note.id != id);

    localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
  }
}
