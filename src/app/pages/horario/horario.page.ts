import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage {

  // Puedes tener propiedades para controlar qué secciones están abiertas
  openSections: { [key: string]: boolean } = {};

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  toggleSection(day: string) {
    // Puedes implementar la lógica para abrir/cerrar secciones aquí
    this.openSections[day] = !this.openSections[day];
  }

  isSectionOpen(day: string): boolean {
    // Puedes verificar si la sección está abierta aquí
    return this.openSections[day] || false;
  }
}

