(function(exports) {
    function NoteController(NoteList) {
        this.noteList = NoteList;
        this.noteList.add("Favourite drink: seltzer");
        this.noteListView = new NoteListView(this.noteList)
    }

    NoteController.prototype.insertHTMLToApp = function() {
        document.getElementById("app").innerHTML = this.noteListView.returnNotesHTML();
    };

    exports.NoteController = NoteController;

})(this);


//
// noteController(NoteListView,NoteList);
//