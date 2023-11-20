import { Component } from '@angular/core';
import { DetallereservaService } from '../detallereserva.service';

@Component({
  selector: 'app-detallereserva-principal',
  templateUrl: './detallereserva-principal.component.html',
  styleUrls: ['./detallereserva-principal.component.css']
})
export class DetallereservaPrincipalComponent {

  total:number=0;
  constructor(private detalleReservaReserva:DetallereservaService){
    this.calcularTotal()
  }

  calcularTotal(){
    var t=0;
    for(var i=0;i<this.detalleReservaReserva.detallereservas.length;i++){
      t+= this.detalleReservaReserva.detallereservas[i].price
    }
    this.total=t;
  }

  get detalles(){
    return this.detalleReservaReserva.detallereservas
  }

}
