import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls:  ['./hotel.component.css']

  })
export class HotelComponent implements OnInit {
 Message: string = "Vous n'avez pas des reservations";
 isReserved : boolean = false; 
 NomClient : string = " ";
 nombrePersonnes: string = '1';
 isClassVisible: boolean= false;
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
  OnEcrirNom(evt: any){

    this.NomClient = evt.target.value;
    //ou bien en paramètre la classe Event
    //this.NomClient = <HTMLInputElement>evt.target).value;
    console.log(evt.target.value);
    //(
  }
}

