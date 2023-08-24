import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.page.html',
  styleUrls: ['./primo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PrimoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
