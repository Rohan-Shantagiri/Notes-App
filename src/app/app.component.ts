import { Component, Output, Input, EventEmitter } from '@angular/core';
import { NoteserviceService } from './noteservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NotesApp';
  edit = false;
  singleData: any;

  onClick() {
    this.edit = false;
    let data = JSON.parse(localStorage.getItem("notes"))['notes'];
    this.singleData = { id: data.length, text: '' };
  }

  constructor(public noteService: NoteserviceService) { }
  receiveData($event) {
    if ($event) {
      this.edit = true;
      this.singleData = $event;
    }
  }
}
