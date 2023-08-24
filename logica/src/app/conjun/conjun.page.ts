import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-conjun',
  templateUrl: './conjun.page.html',
  styleUrls: ['./conjun.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConjunPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
