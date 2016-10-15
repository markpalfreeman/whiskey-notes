import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes = [
    {
      whiskeyName: 'Blanton\'s',
      rating: 3
    },
    {
      whiskeyName: 'Eagle Rare',
      rating: 3
    },
    {
      whiskeyName: 'Westland',
      rating: 5
    },
    {
      whiskeyName: 'Copperworks',
      rating: 4
    }
  ];

  constructor() { }

  ngOnInit () {

  }

  // Component methods
  addNote () {
    // this.notes.push({
    //   whiskeyName: 'newNote',
    //   rating: 2
    // })
  }

}
