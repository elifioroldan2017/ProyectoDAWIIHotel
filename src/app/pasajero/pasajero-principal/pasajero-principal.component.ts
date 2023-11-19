import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-pasajero-principal',
  templateUrl: './pasajero-principal.component.html',
  styleUrls: ['./pasajero-principal.component.css']
})
export class PasajeroPrincipalComponent {
  nombrepasajero:string=""
  constructor(private router:Router){

  }


  agregar(){
    this.router.navigate(["pasajero/agregar"])
  }

  buscarPasajero(){

  }
}
