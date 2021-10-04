import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  title = 'Mapa Bogota';
  lat = 4.644987;
  lng = -74.075389;
  zoom = 14;
  constructor() { }

  ngOnInit(): void {
  }

}
