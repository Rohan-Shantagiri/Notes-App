import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';
import { NoteserviceService } from '../noteservice.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {

  @Input()
  public note: Note;
  @Output() getData = new EventEmitter<any>();

  constructor(private noteService: NoteserviceService) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.noteService.removeNotes(this.note.id);
  }

  edit(id, text) {
    this.getData.emit(this.note);
    // this.noteService.editNotes(id, text);
  }

}
