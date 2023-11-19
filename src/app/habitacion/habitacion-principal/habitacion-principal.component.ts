import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-habitacion-principal',
  templateUrl: './habitacion-principal.component.html',
  styleUrls: ['./habitacion-principal.component.css']
})
export class HabitacionPrincipalComponent  {


  constructor(private routes:Router){

  }


  agregar(){
    this.routes.navigate(["habitacion/agregar"])
  }

  buscarHabitacion(){

  }

}
