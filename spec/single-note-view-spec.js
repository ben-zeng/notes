function testSingleNoteViewReturnHTML() {
    try {
        let note = new Note("I love JavaScript!!");
        let singleNoteView = new SingleNoteView(note);
        assert.isTrue(singleNoteView.getHTML() === "<div>I love JavaScript!!</div>");
    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}