import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteserviceService } from '../noteservice.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {

  @Input()
  private note: Note;

  constructor(private noteService:NoteserviceService) { }

  ngOnInit(): void {
  }

}
