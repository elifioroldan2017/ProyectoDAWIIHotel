import { Component } from '@angular/core';
import { HabitacionService } from '../habitacion.service';
import { Piso } from '../interfaces/Piso';
import { EstadoHabitacion } from '../interfaces/EstadoHabitacion';
import { TipoHabitacion } from '../interfaces/TipoHabitacion';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitacion } from '../interfaces/Habitacion';

@Component({
  selector: 'app-form-habitacion',
  templateUrl: './form-habitacion.component.html',
  styleUrls: ['./form-habitacion.component.css']
})
export class FormHabitacionComponent {

  titulo:string=""
  habitacion:Habitacion={
    roomId:        0,
    roomNumber:    "",
    roomPrice:     0,
    roomStatusId:  0,
    floorId:       0,
    roomTypeId:    0,
    roomActive:    ""
  }
  
  constructor(private habitacionService:HabitacionService,private routes:Router,
    private activateRoute:ActivatedRoute){
     var id= activateRoute.snapshot.params["id"]
      if(id==undefined) this.titulo="Agregar Habitación"
      else  {
        this.titulo="Editar Habitación"
        habitacionService.obtenerHabitacion(Number(id)).subscribe(res=>{
          this.habitacion=res;
        })
      }
    }

  get pisos():Piso[]{
    return this.habitacionService.pisos;
  }

  get estadohabitaciones():EstadoHabitacion[]{
    return this.habitacionService.estadohabitaciones;
  }

  get tipohabitaciones():TipoHabitacion[]{
    return this.habitacionService.tipohabitaciones
  }

  regresar(){
    this.routes.navigate(["habitacion"])
  }
  guardar(){
    if(this.habitacion.roomId==0){

      this.habitacionService.insertarHabitacion(this.habitacion).subscribe(res=>{
          if(res.roomId>0){
             this.routes.navigate(["habitacion"])
             this.habitacionService.listarHabitacion();
          }
      })

    }else{

      this.habitacionService.actualizarHabitacion(this.habitacion).subscribe(res=>{
         if(res.roomId>0){
             this.routes.navigate(["habitacion"])
             this.habitacionService.listarHabitacion();
          }
      })

    }
  }
}
