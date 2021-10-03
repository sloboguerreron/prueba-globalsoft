import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  constructor() { }

  center = {lat: 24, lng: 12};
  zoom = 15;
  //display?: google.maps.LatLngLiteral;

  ngOnInit(): void {
  }

}
