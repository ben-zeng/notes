function testCreateNoteWithText(){
  try {
    let note = new Note("I love JavaScript!!");
    assert.isTrue(note.getText() === "I love JavaScript!!");
  }
    catch(err) {
      return "Error - " + arguments.callee.name + " : " + err;
  }
  return "Pass - " + arguments.callee.name;
};

