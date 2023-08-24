import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class HomePage {

  opciones = [
    { label: 'Fibonacci' },
    { label: 'Factorial' },
    { label: 'Primos' },
    { label: 'Pares e impares' },
    { label: 'Conjuntos' },
  ];

  constructor(private router: Router) {}

  accionBoton1():void {
  this.router.navigateByUrl ('fibo');
  }
  accionBoton2() {
    this.router.navigateByUrl ('facto');
  }
  accionBoton3() {
    this.router.navigateByUrl ('primo');
  }
  accionBoton4() {
    this.router.navigateByUrl ('par');
  }
  accionBoton5() {
    this.router.navigateByUrl ('conjun');
  }

}
