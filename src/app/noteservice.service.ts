import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  private nextId: number;

  constructor() {

    let notes = this.getNotes();

    if(notes.length == 0){
      this.nextId = 0;
    }
    else {
      let maxId = notes[notes.length - 1].id;
      this.nextId = maxId + 1;
    }
   }

   public addNotes(text : string): void {
     let note = new Note(this.nextId, text);
     let notes = this.getNotes();
     notes.push(note);

     this.setLocalStorageNotes(notes);
     this.nextId++;
   }

   public getNotes():Note[] {
     let localStorageItem = JSON.parse(localStorage.getItem('notes'));
     return localStorageItem == null ? [] : localStorageItem.notes;
   }

   public removeNotes(id : number): void {
     let notes = this.getNotes();
     notes = notes.filter((note) => note.id != id);
     this.setLocalStorageNotes(notes);
   }

   private setLocalStorageNotes(notes: Note[]) : void {
     localStorage.setItem('notes',JSON.stringify({ notes : notes }));
   }

  //  public editNotes(id : number):void {
  //    let notes = this.getNotes();
  //    notes = notes.filter((note) => note.id == id);
  //    notes.push(note);
  //  }
}
