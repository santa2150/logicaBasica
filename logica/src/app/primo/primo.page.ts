import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-primo',
  templateUrl: './primo.page.html',
  styleUrls: ['./primo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class PrimoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volver():void {
    this.router.navigateByUrl('home');
  }

  numeroIngresado: number=0;
  numerosPrimos: number[] = [];

  calcularPrimos() {
    this.numerosPrimos = this.generatePrimes(this.numeroIngresado);
  }

  private generatePrimes(n: number): number[] {
    const primes = [];
    for (let num = 2; num < n; num++) {
      if (this.isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  }

  private isPrime(num: number): boolean {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

}
