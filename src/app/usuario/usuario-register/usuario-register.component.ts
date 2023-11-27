import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasajeroService } from 'src/app/pasajero/pasajero.service';
import UsuarioRegister from '../interface/UsuarioRegister';
import { UsuarioService } from '../usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-register',
  templateUrl: './usuario-register.component.html',
  styleUrls: ['./usuario-register.component.css']
})
export class UsuarioRegisterComponent {

  ousuario:UsuarioRegister={
    names:"",
    lastname2:"",
    lastname1:"",
    idtpodoc:0,
    email:"",
    nrodoc:"",
    password:"",
    phone:"",
    user:""
  }

  constructor(private router:Router,private pasajeroService:PasajeroService,private routes:ActivatedRoute,
    private usuarioService:UsuarioService){


  }

  get tipodocumentos(){
    return this.pasajeroService.tipodocumentos
  }

  regresar(){
    this.router.navigate(["/"])
  }

  registrar(){
    
    this.usuarioService.agregarUsuarioExterno(this.ousuario).subscribe(res=>{
      Swal.fire('Exito!', 'Se  guardó el usuario correctamente', 'success');
      this.router.navigate(["/"]) 
    },(err)=>{
      Swal.fire('Ocurrio un error', err.error, 'error');
    })

  } 

}
