import { Component, ViewChild, OnInit } from '@angular/core';

import {
  EfectyComponent
} from './components/efecty.component';

import {
  ToastyService,
  ToastyConfig,
  ToastOptions,
  ToastData
} from 'ng2-toasty';

@Component({
  selector: 'iz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(EfectyComponent)
  efectyComponent: EfectyComponent;

  giro: number;

  constructor(private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'material';
  }

  calcularValorGiro() {
    this.efectyComponent.calcularValorGiro(this.giro);
    if (this.giro > 3000000) {
      this.addToast();
    }
  }

  ngOnInit() {

  }

  addToast() {
    // Just add default Toast with title only 
    //this.toastyService.default('Efecty');
    // Or create the instance of ToastOptions 
    var toastOptions: ToastOptions = {
      title: "Efecty",
      msg: "Giro debe ser entre $5,000 y $3,000,000",
      showClose: true,
      timeout: 5000,
      theme: 'material'
    };
    // Add see all possible types in one shot 
    this.toastyService.default(toastOptions);
  }
}
