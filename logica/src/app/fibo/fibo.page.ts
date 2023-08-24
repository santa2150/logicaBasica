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

}
