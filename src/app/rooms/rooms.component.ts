import { Component, OnInit } from '@angular/core';
import { Room } from './room';
import { RoomList } from './room';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit{

  roomList: RoomList[] =[];
    
  
  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 1,
      roomType: "Delux",
      amenities:"air",
      price:500,
      rating: 4.5

    },
    {
      roomNumber: 2,
      roomType: "Normal",
      amenities:"air",
      price:300,
      rating: 4

    },
    {
      roomNumber: 3,
      roomType: "VIP",
      amenities:"air",
      price:1000,
      rating: 5
    },]
  }
  rooms: Room = {
    totalRooms: 20,
    availableRooms:10,
    bookedRooms: 5,
  }

  
  hotelName = "hihi";
  numberRoom= this.rooms.totalRooms;
  hideRoom = false
  
  toggle() {
    this.hideRoom = !this.hideRoom;
  }

  selectRoom(room:RoomList){
    this.selectedRoom= room;
    
  }
  get availableRooms(): number {
    return this.roomList.length;
  }
  selectedRoom!: RoomList;
  addRoom(){
    const room: RoomList={
      roomNumber: 4,
      roomType: "Normal",
      amenities:"air",
      price:200,
      rating: 4
    }
    //this.roomList.push(room);
    this.roomList = [...this.roomList,room]
  }
}
