function testNoteListViewInstantiation(){
    try {
         let noteList = new NoteList();
         let noteListView = new NoteListView(noteList);

        assert.isTrue(noteListView.listNotes === noteList);

    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}


  function testNoteListViewReturnsNotesInHTML() {
    try {
         let noteList = new NoteList();
         noteList.add("note1");
         noteList.add("note2");

         let noteListView = new NoteListView(noteList);

        assert.isTrue(noteListView.returnNotesHTML() === "<ul><li><div>note1</div></li><li><div>note2</div></li></ul>");

    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}

function testNoteListViewHandlesVariousLengths() {
  try {
       let noteList = new NoteList();
       noteList.add("note1");

       let noteListView = new NoteListView(noteList);

      assert.isTrue(noteListView.returnNotesHTML() === "<ul><li><div>note1</div></li></ul>");

  }
  catch(err) {
      return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
}

function testNoteListViewHandlesZeroLength() {
  try {
       let noteList = new NoteList();
       let noteListView = new NoteListView(noteList);

      assert.isTrue(noteListView.returnNotesHTML() === null);

  }
  catch(err) {
      return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
}

// function testNoteListReturnNotes(){
//     try {
//
//         let noteList = new NoteList();
//
//         noteList.add("note1");
//         noteList.add("note2");
//
//
//         assert.isTrue(noteList.returnNotes() ===  noteList.notes)
//
//     }
//     catch(err) {
//         return "Error - " + arguments.callee.name + " : " + err;
//     }
//     return "Pass - " + arguments.callee.name;
// }
