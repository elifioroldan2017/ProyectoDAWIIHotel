import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaPrincipalComponent } from './reserva-principal/reserva-principal.component';
import { MenuModule } from '../menu/menu.module';
import { HabitacionpisoComponent } from './habitacionpiso/habitacionpiso.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReservaPrincipalComponent,
    HabitacionpisoComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    FormsModule
  ]
})
export class ReservaModule { }
