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
    password1:"",
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
    if(this.ousuario.names.trim()=="")    {
      Swal.fire('Ocurrio un error', "Ingrese un nombre", 'error');
      return;
    }   

    if(this.ousuario.lastname1.trim()=="")    {
      Swal.fire('Ocurrio un error', "Ingrese apellido paterno", 'error');
      return;
    }   

    if(this.ousuario.lastname2.trim()=="")    {
      Swal.fire('Ocurrio un error', "Ingrese apellido materno", 'error');
      return;
    }  

    if(this.ousuario.email.trim()=="")    {
      Swal.fire('Ocurrio un error', "Ingrese email", 'error');
      return;
    }  

    
    if(this.ousuario.phone.trim()=="")    {
      Swal.fire('Ocurrio un error', "Ingrese telefono", 'error');
      return;
    }  

    if(this.ousuario.idtpodoc==0)    {
      Swal.fire('Ocurrio un error', "Seleccione tipo documento", 'error');
      return;
    }  

    if(this.ousuario.nrodoc=="")    {
      Swal.fire('Ocurrio un error', "Ingrese numero documento", 'error');
      return;
    }  

    if(this.ousuario.user=="")    {
      Swal.fire('Ocurrio un error', "Ingrese un usuario", 'error');
      return;
    }  

    if(this.ousuario.password=="")    {
      Swal.fire('Ocurrio un error', "Ingrese una contraseña 1", 'error');
      return;
    }  

    if(this.ousuario.password1=="")    {
      Swal.fire('Ocurrio un error', "Ingrese una contraseña 2", 'error');
      return;
    }  

    if(this.ousuario.password1!=this.ousuario.password)    {
      Swal.fire('Ocurrio un error', "La contraseña no coincide", 'error');
      return;
    }  


    this.usuarioService.agregarUsuarioExterno(this.ousuario).subscribe(res=>{
      Swal.fire('Exito!', 'Se  guardó el usuario correctamente', 'success');
      this.router.navigate(["/"]) 
    },(err)=>{
      Swal.fire('Ocurrio un error', err.error, 'error');
    })

  } 

}
