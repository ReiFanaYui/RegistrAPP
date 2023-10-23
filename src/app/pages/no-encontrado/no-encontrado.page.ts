import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-encontrado',
  templateUrl: './no-encontrado.page.html',
  styleUrls: ['./no-encontrado.page.scss'],
})
export class NoEncontradoPage implements OnInit {

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']); // Reemplaza 'home' con la ruta real de tu página de inicio
  }

  ngOnInit() {
  }

}
