import { Component } from '@angular/core';
import { HabitacionService } from 'src/app/habitacion/habitacion.service';

@Component({
  selector: 'app-reserva-principal',
  templateUrl: './reserva-principal.component.html',
  styleUrls: ['./reserva-principal.component.css']
})
export class ReservaPrincipalComponent {

  constructor(private habitacionService:HabitacionService){
    
  }

  get pisos(){
    return this.habitacionService.pisos
  }

}
