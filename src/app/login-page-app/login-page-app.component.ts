import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageAppService } from '../login-page-app.service';
import Login from './interfaces/Login';
import Swal from 'sweetalert2';
import UserLogin from './interfaces/UserLogin';
@Component({
  selector: 'app-login-page-app',
  templateUrl: './login-page-app.component.html',
  styleUrls: ['./login-page-app.component.css']
})
export class LoginPageAppComponent {
  oLogin:Login={
    user:"",
    password:""
  }



  constructor(private router:Router,private servicioLogin:LoginPageAppService){

  }

  enviar(){
    console.log(this.oLogin.user)
    console.log(this.oLogin.password)
    this.servicioLogin.login(this.oLogin).subscribe((res: UserLogin)=>{
      Swal.fire('Exito!', 'Bievenido al Sistema', 'success');
      this.servicioLogin.oUser=res;
      this.router.navigate(["/pasajero"])
    },(error) => {
      Swal.fire('Error', 'Usuario y/o contraseña incorrecta', 'error');
    })
  }

}
