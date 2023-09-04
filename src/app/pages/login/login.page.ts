import { Component, OnInit } from '@angular/core';
//Importar Router para la navegación entre páginas :p
import { Router, NavigationExtras } from '@angular/router';
//Importar alertController para las alertas
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //Array Donde se guardan los ususarios y su contraseña :o
  usuarios = [
    {nombre: 'juanuko', contrasena: '1234'},
    {nombre: 'juanuko2', contrasena: '4321'}
  ]
  //Variables para verificar :p
  usuario: string = '';
  contrasena2: string = '';

  mensajeError: string ='';

  //Creando una instancia de Router y de AlertController
  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  //función para Iniciar sesión 
  //Tuve que usar async y await sin estar muy seguro de para que sirven, pero me salian errores sin estos, (buscar pa q cresta sirven).
  async login(){
    //Verifica que el usuario y contraseña estén y el array y coincidan
    const usuarioEncontrado = this.usuarios.find(
      user => user.nombre == this.usuario && user.contrasena == this.contrasena2
    );

    //Si el usuario es encontrado se navega hacía la page home omg
    if(usuarioEncontrado){
      const navigationExtras: NavigationExtras = {
        state: {
          nombreUsuario: usuarioEncontrado.nombre
        }
      }

      this.router.navigate(['/home'], navigationExtras)
    }else{
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Credenciales incorrectas. Por favor, intenta de nuevo.',
        buttons: ['OK'],
      });
      await alert.present();
      this.mensajeError= '¡Usuario o contraseña incorrectos!'
    }
  }


  //función para agregar usuario al array
  async agregarUsuario(){
    //Me dio flojera hacer otra page donde crear otro usuario xd, así que mejor lo hice con una alerta.
    const alerta = await this.alertController.create(
      {
        header: 'Agregar nuevo Usuario',
        inputs: [
          {
            name: 'nombreUsuario',
            type: 'text',
            placeholder: 'Nuevo usuario'
          },
          {
            name: 'contrasena',
            type: 'password',
            placeholder: 'Nueva contraseña'
          }
        ],
        buttons: [
          {
            text: 'cancelar',
            role: 'cancel'
          },
          {
            text: 'agregar',
            handler: (data) => {
              if (data.nombreUsuario && data.contrasena) {
                this.usuarios.push({ nombre: data.nombreUsuario, contrasena: data.contrasena });
              }
            },
          },
        ]
      });

    await alerta.present();
  };
  
  async olvideContrasena() {
    const alertaOlvidar = await this.alertController.create({
      header: 'Olvidé mi contraseña',
      message: 'Ingresa tu nombre de usuario y una nueva contraseña',
      inputs: [
        {
          name: 'nombreUsuario',
          type: 'text',
          placeholder: 'Nombre de usuario'
        },
        {
          name: 'nuevaContrasena',
          type: 'password',
          placeholder: 'Nueva contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: (data) => {
            // Busca al usuario en el array
            const index = this.usuarios.findIndex(user => user.nombre === data.nombreUsuario);

            // Verifica si se encontró al usuario
            if (index != -1) {
              this.usuarios[index].contrasena = data.nuevaContrasena;
            } else {
              this.mostrarMensajeError('Usuario no encontrado');
            }
          }
        }
      ]
    });
  
    await alertaOlvidar.present();
  }
  
  async mostrarMensajeError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }



}


