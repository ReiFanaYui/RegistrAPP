import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  asistencias: any[] = [];

  constructor(private storage: Storage,private navCtrl: NavController) { 
    this.cargarAsistencias();
  }

  private cargarAsistencias() {
    this.storage.get('asistencias').then((data) => {
      this.asistencias = data || [];
    });
  }

  borrarAsistencias() {
    // Borra las asistencias almacenadas
    this.storage.remove('asistencias');
    // Actualiza la lista local
    this.asistencias = [];
  }

  registrarAsistencia() {
    const fecha = new Date().toLocaleString();
    const mensaje = 'Presente';

    this.asistencias.push({ fecha, mensaje });
    
    this.storage.set('asistencias', this.asistencias);
  }

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
  }

}
