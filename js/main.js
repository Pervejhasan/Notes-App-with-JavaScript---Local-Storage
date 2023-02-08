// // import NotesAPI from "./NotesAPI.js";
// import NotesView from "./NotesView.js";

// // NotesAPI.deleteNotes(80368);
// // console.log(NotesAPI.getAllNotes());

// const app = document.getElementById("app");
// const view = new NotesView(app, {
//   onNoteAdd() {
//     console.log("Let's add a new node");
//   },

//   // onNoteAdd

//   onNoteEdit(newTitle, newBody) {
//     console.log("Let's add a note");
//     console.log(newTitle);
//     console.log(newBody);
//   },

//   // onNodeDelete
// });
import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);
