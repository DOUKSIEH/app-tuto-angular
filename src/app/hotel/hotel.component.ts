import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styles:[`
   h2{color: blueviolet;}
   h3,h5{color: darkblue;}

   `
  ]

  })
export class HotelComponent implements OnInit {
 Message: string = "Vous n'avez pas des reservations";
 isReserved : boolean = false; 
 NomClient : string = " ";
  constructor() { }

  ngOnInit() {

  }
  hotelName: string = "Grand Hotel";
  hotelStars: number = 5;
  hotelLocations: string = "Paris";

  GetNombreResidents(){
    return 198;
  }
  OnReserver(){
    this.isReserved = true;
    this.Message = "Votre reservations est confirmé ! ";

  }
  OnEcrirNom(evt: Event){
    this.NomClient = (<HTMLInputElement>evt.target).value;
  }
}

