import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-facto',
  templateUrl: './facto.page.html',
  styleUrls: ['./facto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class FactoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volver():void {
    this.router.navigateByUrl('home');
  }

  numeroIngresado: number=0;
  factorial: number = 1; // Inicializa con el valor del factorial base

  calcularFactorial() {
    this.factorial = this.calculateFactorial(this.numeroIngresado);
  }

  private calculateFactorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.calculateFactorial(n - 1);
    }
  }

}
