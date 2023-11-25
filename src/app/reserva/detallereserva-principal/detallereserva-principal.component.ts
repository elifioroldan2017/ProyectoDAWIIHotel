import { Component } from '@angular/core';
import { DetallereservaService } from '../detallereserva.service';
import Swal from 'sweetalert2';
import Reserva from '../interfaces/Reserva';
import { ReservaService } from '../reserva.service';
import { LoginPageAppService } from 'src/app/login-page-app.service';
import DetalleReserva from '../interfaces/DetalleReserva';
import { UsuarioService } from 'src/app/usuario/usuario.service';
@Component({
  selector: 'app-detallereserva-principal',
  templateUrl: './detallereserva-principal.component.html',
  styleUrls: ['./detallereserva-principal.component.css']
})
export class DetallereservaPrincipalComponent {
  reserva:Reserva= {
    iduser:1,
    date:new Date().toLocaleDateString(),
    total:0,
    active:"A",
    details:[],
  }
  detalle:DetalleReserva[]=[]
  constructor(private detalleReservaReserva:DetallereservaService,private reservaService:ReservaService,
    private loginService:LoginPageAppService,private usuarioService:UsuarioService){
    this.calcularTotal()
  }

  calcularTotal(){
    var t=0;
    for(var i=0;i<this.detalleReservaReserva.detallereservas.length;i++){
      t+= this.detalleReservaReserva.detallereservas[i].price

    }
    this.reserva.total=t;
  }

  get detalles(){
    return this.detalleReservaReserva.detallereservas
  }

  fechaActual(){
      const fechaActual = new Date();

      // Formatea la fecha
      const año = fechaActual.getFullYear();
      const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // El mes es 0 indexado, por eso se suma 1
      const dia = String(fechaActual.getDate()).padStart(2, '0');

      // Formatea la hora
      const hora = String(fechaActual.getHours()).padStart(2, '0');
      const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
      const segundos = String(fechaActual.getSeconds()).padStart(2, '0');

      // Crea la cadena de fecha en el formato deseado
      const fechaFormateada = `${año}-${mes}-${dia}T${hora}:${minutos}:${segundos}`;

      return fechaFormateada;
  }

 

   convertirFormatoFecha(fechaEnFormatoYYYYMMDD:string) {
    // Agregar la hora y minutos a la fecha
    const fechaConHora = fechaEnFormatoYYYYMMDD + 'T12:00:00';
  
    return fechaConHora;
  }

  eliminar(id:number){

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta seguro de eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {
        this.detalleReservaReserva.eliminarDetalle(id)
        this.calcularTotal()
      }
    });


  }

  guardar(){

    if(this.detalleReservaReserva.detallereservas.length==0){
      Swal.fire('Error', 'Debe ingresar al menos un detalle para guardar la reserva', 'error');
      return;
    }

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta seguro de guardar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {
        this.detalle = JSON.parse(JSON.stringify(this.detalleReservaReserva.detallereservas));
        for(var i=0;i<this.detalle.length;i++){
          this.detalle[i].detailId=(i+1)
          this.detalle[i].checkin=this.convertirFormatoFecha(this.detalle[i].checkin)
          this.detalle[i].checkout=this.convertirFormatoFecha(this.detalle[i].checkout)
        }       
        var data = this.usuarioService.obtenerUsuarioDesdeStorage()
        this.reserva.iduser=data.userId
        this.reserva.active="A"
        this.reserva.date= this.fechaActual()
        this.reserva.details=this.detalle
        console.log(this.reserva)  
        this.reservaService.insertarReserva(this.reserva).subscribe(res=>{

          
            Swal.fire('Exito!', 'Se  guardó los cambios correctamente', 'success');
            
          })
      }
    });
  }

}
