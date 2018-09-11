import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  texto = 'ciudad de Madrid';
  id: any = 1;
  fecha: object = new Date();
  importe = 1236.678;
  aciertos = .097845;
  jugador = {
    nombre: 'Sergio',
    apellidos: 'Ramos'
  }
  cantidad = 165165464.1616546;

  constructor() { }

  ngOnInit() {
    this.id = '000' + Number(this.id);
  }

}
