import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-par',
  templateUrl: './par.page.html',
  styleUrls: ['./par.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class ParPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  volver():void {
    this.router.navigateByUrl('home');
  }

  numeroIngresado: number=0;
  tipoSeleccionado: 'pares' | 'impares' = 'pares'; // Valor por defecto
  numerosResultado: number[] = [];

  calcularNumeros() {
    this.numerosResultado = this.tipoSeleccionado === 'pares'
      ? this.calculateEvenNumbers(this.numeroIngresado)
      : this.calculateOddNumbers(this.numeroIngresado);
  }

  private calculateEvenNumbers(n: number): number[] {
    const evenNumbers = [];
    for (let num = 0; num <= n; num += 2) {
      evenNumbers.push(num);
    }
    return evenNumbers;
  }

  private calculateOddNumbers(n: number): number[] {
    const oddNumbers = [];
    for (let num = 1; num <= n; num += 2) {
      oddNumbers.push(num);
    }
    return oddNumbers;
  }

}
