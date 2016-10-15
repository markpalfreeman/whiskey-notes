import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// App-level Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoteComponent } from './components/note/note.component';
import { NoteListComponent } from './components/note-list/note-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
