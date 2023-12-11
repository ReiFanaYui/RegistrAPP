// src/app/services/asistencia.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AsistenciaService {
  asistencias: any[] = [];

  constructor(private storage: Storage) {
    this.Oninit();
    this.cargarAsistencias();
  }

  private async Oninit() {
    // Creamos la base de datos si no está creada
    await this.storage.create();
  }

  private cargarAsistencias() {
    this.storage.get('asistencias').then((data) => {
      this.asistencias = data || [];
    });
  }

  registrarAsistencia(codigoQR: string) {
    const fecha = new Date().toLocaleString();
    const mensaje = 'Presente';
    const asistencia = { fecha, mensaje, codigoQR };

    this.asistencias.push(asistencia);

    this.storage.set('asistencias', this.asistencias);
  }

  obtenerAsistencias(): any[] {
    return this.asistencias;
  }
}
