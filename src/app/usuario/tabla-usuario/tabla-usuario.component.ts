import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router, Routes } from '@angular/router';
import {CargarScriptsService} from './../../cargar-scripts.service';


@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent {


  get usuarios(){
    return [...this.usuarioService.usuarios]
  }
  constructor(private usuarioService:UsuarioService,private routes:Router,private _CargarScripts:CargarScriptsService){
    _CargarScripts.Carga(["datatable"]);

  }
  editar(id:number){
    this.routes.navigate(["usuario/editar/"+id])
  }


  
}
