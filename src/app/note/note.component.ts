import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteserviceService } from '../noteservice.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  public noteText: string;
  @Input() singleNote: any;
  note: any;
  constructor(private noteService: NoteserviceService) {
    this.noteText = '';
  }

  ngOnInit(): void {
    console.log(this.singleNote)
    this.note = JSON.parse(localStorage.getItem("notes"))['notes'];
  }

  public addNotes(): void {
    this.noteService.addNotes(this.singleNote.text);
    this.singleNote.text = '';
  }
  editNotes() {
    console.log(this.singleNote);
    this.noteService.editNotes(this.singleNote.id, this.singleNote.text);
    this.singleNote.text = '';
  }


}
