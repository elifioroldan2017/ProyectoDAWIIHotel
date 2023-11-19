import { Component } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { Habitacion } from 'src/app/habitacion/interfaces/Habitacion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-habitacionpiso',
  templateUrl: './habitacionpiso.component.html',
  styleUrls: ['./habitacionpiso.component.css']
})
export class HabitacionpisoComponent {

    habitaciones:Habitacion[]=[]
    constructor(private reservaService:ReservaService,private activateRoute:ActivatedRoute){
      var param=this.activateRoute.snapshot.params["id"]
      this.buscarHabitacionPiso(Number(param))
    }

    buscarHabitacionPiso(idpiso:number){
      this.reservaService.buscarHabitacionPorPiso(idpiso).subscribe(res=>{
        this.habitaciones=res;
      })
    }

}
