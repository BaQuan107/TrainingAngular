import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit{

  ngOnInit(): void {
    
  }
  hotelName = "hihi";
  numberRoom= 10;
}
