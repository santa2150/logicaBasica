import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-conjun',
  templateUrl: './conjun.page.html',
  styleUrls: ['./conjun.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class ConjunPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volver():void {
    this.router.navigateByUrl('home');
  }

  conjuntoA: number[] = [];
  conjuntoB: number[] = [];
  operacionSeleccionada: 'interseccion' | 'union' | 'diferenciaA' | 'diferenciaB' = 'interseccion';
  resultado: number[] = [];

  calcularOperacion() {
    switch (this.operacionSeleccionada) {
      case 'interseccion':
        this.resultado = this.calcularInterseccion(this.conjuntoA, this.conjuntoB);
        break;
      case 'union':
        this.resultado = this.calcularUnion(this.conjuntoA, this.conjuntoB);
        break;
      case 'diferenciaA':
        this.resultado = this.calcularDiferencia(this.conjuntoA, this.conjuntoB);
        break;
      case 'diferenciaB':
        this.resultado = this.calcularDiferencia(this.conjuntoB, this.conjuntoA);
        break;
      default:
        this.resultado = [];
        break;
    }
  }

  private calcularInterseccion(conjunto1: number[], conjunto2: number[]): number[] {
    return conjunto1.filter(num => conjunto2.includes(num));
  }

  private calcularUnion(conjunto1: number[], conjunto2: number[]): number[] {
    return [...new Set([...conjunto1, ...conjunto2])];
  }

  private calcularDiferencia(conjunto1: number[], conjunto2: number[]): number[] {
    return conjunto1.filter(num => !conjunto2.includes(num));
  }

}
