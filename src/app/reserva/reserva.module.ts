import { NgModule } from '@angular/core';
import { CommonModule,DatePipe  } from '@angular/common';
import { ReservaPrincipalComponent } from './reserva-principal/reserva-principal.component';
import { MenuModule } from '../menu/menu.module';
import { HabitacionpisoComponent } from './habitacionpiso/habitacionpiso.component';
import { FormsModule } from '@angular/forms';
import { DetallereservaPrincipalComponent } from './detallereserva-principal/detallereserva-principal.component';



@NgModule({
  declarations: [
    ReservaPrincipalComponent,
    HabitacionpisoComponent,
    DetallereservaPrincipalComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    FormsModule
  ],
  providers:[
    DatePipe 
  ]
})
export class ReservaModule { }
