import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombreUsuario: string = '';
  carrera: string = 'Ingenieria Informatica';
  email: string = 'estudiante@duocuc.cl';
  telefono: string = '123456789';
  direccion: string = 'Dirección del Estudiante';

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }
  
  editarPerfil() {
    // Implementa la lógica para editar el perfil aquí
    console.log('Editar Perfil');
  }

  ngOnInit() {
    const navigation = window.history.state;

    if (navigation) {
      this.nombreUsuario = navigation.nombreUsuario;
    }
  }
}