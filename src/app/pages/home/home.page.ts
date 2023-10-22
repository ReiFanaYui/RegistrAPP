import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  subjects: any[] = [];
  nombreUsuario: string = '';
  apellidoUsuario: string = '';

  constructor(private route: ActivatedRoute, private alertController: AlertController, private router: Router,private navCtrl: NavController) { }

  ngOnInit() {
    const state = window.history.state;
    this.nombreUsuario = state.nombreUsuario;

    this.subjects.push({img: 'assets/icon/horario.jpg', name: 'Horario'})
    this.subjects.push({img: 'assets/icon/asistencia.png', name: 'Asistencia'})
    this.subjects.push({img: 'assets/icon/camara.png', name: 'Camara'})
    this.subjects.push({img: 'assets/icon/perfil.png', name: 'Perfil'})
    this.subjects.push({img: 'assets/icon/perfil.png', name: 'Noticias'})
    this.subjects.push({img: 'assets/icon/perfil.png', name: 'Salir'})
  }

  limpiarLocalStorage() {
    localStorage.clear(); // Esto eliminará todos los datos almacenados en localStorage
    this.navCtrl.back();
  }

  async goToSubject(subjectName: string){
    if (subjectName === 'Horario') {
      this.router.navigate([subjectName.toLowerCase()]);
    } else if(subjectName === 'Asistencia') {
      this.router.navigate([subjectName.toLowerCase()]);
    }
    else if(subjectName === 'Camara') {
      this.router.navigate([subjectName.toLowerCase()]);
    }
    else if(subjectName === 'Perfil') {
      this.router.navigate([subjectName.toLowerCase()]);
    }
    else if(subjectName === 'Noticias') {
      this.router.navigate([subjectName.toLowerCase()]);
    }
    else if(subjectName === 'Salir') {    
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro de que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          handler: () => {
            localStorage.clear(); // Limpiar almacenamiento local
            this.router.navigate(["/login"])
          },
        },
      ],
    });

    await alert.present();
    }
  }


}
