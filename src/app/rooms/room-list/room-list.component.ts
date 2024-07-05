import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  
  @Input() rooms: RoomList[] = [];
  
  @Output() selectedRoom = new EventEmitter<RoomList>();
  
  ngOnInit(): void {
    
  }
  selectRoom(room : RoomList){
    this.selectedRoom.emit(room);
    console.log(room);
  }
  
}
