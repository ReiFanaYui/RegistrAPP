import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  nombreUsuario: string = '';
  apellidoUsuario: string = '';

  constructor(private route: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {
    const state = window.history.state;
     this.nombreUsuario = state.nombreUsuario;
  }

  async mostrarDatos(){
    const alert = await this.alertController.create({
      header: 'Información del Usuario',
      message: `Nombre: ${this.nombreUsuario} Apellido: ${this.apellidoUsuario}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  limpiar() {
    this.nombreUsuario = '';
    this.apellidoUsuario = '';
  }

}
