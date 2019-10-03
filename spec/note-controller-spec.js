function testNoteControllerInnerHTML(){
    let innerHTML = "<ul><li><div>Favourite drink: seltzer</div></li></ul>";

    try {
        let noteList = new NoteList();
        // // noteList.add(noteText);
        // let noteListView = new NoteListView(noteList);
        let noteController = new NoteController(noteList);
        let body = document.getElementsByTagName("body");
        let dummyElement = document.createElement("div");
        dummyElement.id = "app";
        body.item(0).appendChild(dummyElement);

        noteController.insertHTMLToApp();
       // let check1 = document.getElementById("app").innerHTML;
       // let check2 = noteController.insertHTMLToApp();

        assert.isTrue(document.getElementById("app").innerHTML === innerHTML)
        body.item(0).removeChild(dummyElement);
    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}