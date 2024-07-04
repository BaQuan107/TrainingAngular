import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { RoomListComponent } from './rooms/room-list/room-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
