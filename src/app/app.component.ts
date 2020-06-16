import { Component } from '@angular/core';
import { NoteserviceService } from './noteservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NotesApp';

  plus= true;

  onClick(){
    this.plus=false;
  }

  constructor(public noteService:NoteserviceService) {}
}
