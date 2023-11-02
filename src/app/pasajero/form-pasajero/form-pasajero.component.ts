import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasajeroService } from '../pasajero.service';
import { Pasajero } from '../interfaces/Pasajero';

@Component({
  selector: 'app-form-pasajero',
  templateUrl: './form-pasajero.component.html',
  styleUrls: ['./form-pasajero.component.css']
})
export class FormPasajeroComponent {
  titulo:string=""
  pasajero:Pasajero={
    names:"",
    lastname1:"",
    lastname2:"",
    nrodoc:"",
    idtpodoc:0,
    email:"",
    idpas:0,
    active:"1",
    phone:""
    };
  
  constructor(private router:Router,private pasajeroService:PasajeroService,private routes:ActivatedRoute){
     var id:string=routes.snapshot.params["id"];
     if(id==undefined) this.titulo="Agregar Pasajero"
     else{
      this.titulo="Editar Pasajero"
      this.pasajeroService.obtenerPasajero(Number(id)).subscribe(res=>{
          this.pasajero=res;
      })
     } 
  }

  get tipodocumentos(){
    return this.pasajeroService.tipodocumentos
  }
  
  regresar(){
    this.router.navigate(["pasajero"])
  }

  guardar(){
    if(this.pasajero.idpas==0){
      this.pasajeroService.insertarPasajero(this.pasajero).subscribe(res =>{
        if(res.idpas>0){
          this.router.navigate(["pasajero"]) 
          this.pasajeroService.listarPasajeros();
        }
      })
    }else{
      this.pasajeroService.actualizarPasajero(this.pasajero).subscribe(res=>{
        if(res.idpas>0){
          this.router.navigate(["pasajero"]) 
          this.pasajeroService.listarPasajeros();
        }
      })
    }
  }




}
