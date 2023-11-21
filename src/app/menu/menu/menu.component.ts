import { Component, ViewEncapsulation } from '@angular/core';
import { LoginPageAppService } from 'src/app/login-page-app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class MenuComponent {

  nombreCompleto:string=""
  constructor(private loginService:LoginPageAppService)
  {
    this.nombreCompleto= this.loginService.oUser.name+" "+this.loginService.oUser.lastname1+" "+this.loginService.oUser.lastname2
  }

}
