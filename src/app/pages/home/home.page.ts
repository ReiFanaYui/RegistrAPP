import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  subjects: any[] = [];
  nombreUsuario: string = '';
  apellidoUsuario: string = '';

  constructor(private route: ActivatedRoute, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    const state = window.history.state;
    this.nombreUsuario = state.nombreUsuario;

    this.subjects.push({img: 'assets/icon/horario.jpg', name: 'Horario'})
    this.subjects.push({img: 'assets/icon/asistencia.png', name: 'Asistencia'})
    this.subjects.push({img: 'assets/icon/camara.png', name: 'Camara'})
    this.subjects.push({img: 'assets/icon/perfil.png', name: 'Perfil'})
    this.subjects.push({img: 'assets/icon/perfil.png', name: 'Porsiacaso'})
    this.subjects.push({img: 'assets/icon/perfil.png', name: 'Salir'})
  }

  goToSubject(){

  }


}
