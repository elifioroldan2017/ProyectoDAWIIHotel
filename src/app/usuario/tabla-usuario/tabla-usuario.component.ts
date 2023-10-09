import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent {


  get usuarios(){
    return [...this.usuarioService.usuarios]
  }
  constructor(private usuarioService:UsuarioService,private routes:Router){

  }
  editar(id:number){
    this.routes.navigate(["usuario/editar/"+id])
  }
}
