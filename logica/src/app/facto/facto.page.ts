import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-facto',
  templateUrl: './facto.page.html',
  styleUrls: ['./facto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
