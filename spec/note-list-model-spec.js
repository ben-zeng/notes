function testNoteList(){
    try {
        let noteList = new NoteList();
        noteList.add("note1");
        noteList.add("note2");
        assert.isArrayEqual([noteList.notes[0].text,noteList.notes[1].text], ["note1","note2"])
    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}

function testNoteListReturnNotes(){
    try {
        let noteList = new NoteList();
        noteList.add("note1");
        noteList.add("note2");
        assert.isTrue(noteList.returnNotes() ===  noteList.notes)
    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}