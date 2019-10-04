(function(exports) {

  function NoteListView(noteList) {
    this.listNotes = noteList;
  }

  NoteListView.prototype.returnNotesHTML = function() {
    let arrayIn = this.listNotes.notes;
    let arrayOut = [];
      if (arrayIn.length === 0)
        return null;
      for (let i = 0; i < arrayIn.length; i++) {
        arrayOut.push(arrayIn[i].getText());
      }
    return `<ul><li><div>${arrayOut.join("</div></li><li><div>")}</div></li></ul>`

  }

  exports.NoteListView = NoteListView;

})(this);
