import { Component, OnInit } from '@angular/core';
import { Room } from './room';
import { RoomList } from './room';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit{

  ngOnInit(): void {
    
  }
  rooms: Room = {
    totalRooms: 20,
    availableRooms:10,
    bookedRooms: 5,
  }

  roomList: RoomList[] =[
    {
      roomNumber: 1,
      roomType: "Delux",
      amenities:"air",
      price:500

    },
    {
      roomNumber: 2,
      roomType: "Normal",
      amenities:"air",
      price:500

    },
  ];
  hotelName = "hihi";
  numberRoom= this.rooms.totalRooms;
  hideRoom = false
  
  toggle() {
    this.hideRoom = !this.hideRoom;
  }

  
}
