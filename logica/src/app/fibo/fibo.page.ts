import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router} from '@angular/router';


@Component({
  selector: 'app-fibo',
  templateUrl: './fibo.page.html',
  styleUrls: ['./fibo.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    RouterModule]
})
export class FiboPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volver():void {
    this.router.navigateByUrl('home');
  }

  numeroIngresado: number=1;
  fibonacciSeries: number[] = [];

  calcularFibonacci(n: number) {
    this.fibonacciSeries = this.generateFibonacciSeries(n);
  }

  private generateFibonacciSeries(n: number): number[] {
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
      series[i] = series[i - 1] + series[i - 2];
    }
    return series;
  }

}
