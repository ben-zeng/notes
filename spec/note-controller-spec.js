function testNoteControllerInnerHTML(){
    let innerHTML = "<ul><li><div>Favourite food: pesto</div></li></ul>";
    let noteText = "Favourite food: pesto";

    try {
        // let noteList = new NoteList();
        // noteList.add(noteText);
        let noteListView = new NoteListView();
        noteListView.returnNotesHTML = function() {
            return "<ul><li><div>Favourite food: pesto</div></li></ul>"
        };

        assert.isTrue(noteListView.returnNotesHTML() === innerHTML)

    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}