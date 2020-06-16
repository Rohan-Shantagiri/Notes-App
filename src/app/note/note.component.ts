import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../noteservice.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {


  public noteText: string;
  constructor(private noteService:NoteserviceService) {
    this.noteText = '';
   }

  ngOnInit(): void {
  }

  public addNotes(): void {
    this.noteService.addNotes(this.noteText);
    this.noteText = '';
  }

}
