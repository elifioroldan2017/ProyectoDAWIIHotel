import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaPrincipalComponent } from './reserva-principal/reserva-principal.component';
import { MenuModule } from '../menu/menu.module';
import { HabitacionpisoComponent } from './habitacionpiso/habitacionpiso.component';



@NgModule({
  declarations: [
    ReservaPrincipalComponent,
    HabitacionpisoComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ]
})
export class ReservaModule { }
