import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasajeroService } from 'src/app/pasajero/pasajero.service';
import { TipousuarioService } from 'src/app/tipousuario/tipousuario.service';
import { Usuario } from '../interface/Usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  titulo:string=""
  usuario:Usuario={
    idpassenger:0,
    iduser:0,
    password:"",
    user:"",
    usertpe:0,
    active:"1"
  }
  constructor(private tipousuarioService:TipousuarioService,private pasajeroService:PasajeroService,private routes:Router ,private activateRoute:ActivatedRoute,
    private usuarioService:UsuarioService){
      var param=this.activateRoute.snapshot.params["id"]
      if(param==undefined) this.titulo="Nuevo Usuario"
      else 
      {
        this.titulo="Editar Usuario"
        this.usuarioService.obtenerUsuario(Number(param)).subscribe(res=>{
          this.usuario= res;
        })
      }
  }

  get tipousuarios(){
    return this.tipousuarioService.tipousuarios
  }

  get pasajeros(){
    return this.pasajeroService.pasajeros
  }
  
  regresar(){
    this.routes.navigate(["usuario"])
  }

  guardar(){
      if(this.usuario.iduser==0){
        this.usuarioService.agregarUsuario(this.usuario).subscribe(res=>{
          if(res.iduser>0){
            this.routes.navigate(["usuario"])
            this.usuarioService.listarUsuarios();
          }
        })
      }else{
        this.usuarioService.editarUsuario(this.usuario).subscribe(res=>{
          if(res.iduser>0){
            this.routes.navigate(["usuario"])
            this.usuarioService.listarUsuarios();
          }
        })
      }
  }
}
