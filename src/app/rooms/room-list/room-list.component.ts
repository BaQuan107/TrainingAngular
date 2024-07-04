import { Component, Input, OnInit, Output, output } from '@angular/core';
import { RoomList } from '../room';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent implements OnInit {

  
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>() ;
  
  ngOnInit(): void {
    
  }
  
}
