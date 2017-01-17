import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iz-efecty',
  templateUrl: './efecty.component.html',
  styleUrls: ['./efecty.component.css']
})
export class EfectyComponent implements OnInit {

  total:number;
  costoFijo:number;
  comision:number;
  
  constructor() { }

  ngOnInit() {
    this.total = 0;
    this.costoFijo = 0;
    this.comision = 0;
  }

  calcularValorGiro(valor:number){
    valor = +valor;
    if (valor >= 5000 && valor <= 50000){
      this.total = (valor + 4700);
      this.costoFijo = 4700;
      this.comision = 0;
    } else if (valor >= 5001 && valor <= 100000) {
      this.total = valor + 6000;
      this.costoFijo = 6000;
      this.comision = 0;
    } else if (valor >= 100001 && valor <= 150000){
      this.total = valor + 7500;
      this.costoFijo = 7500;
      this.comision = 0;
    } else if (valor >= 150001 && valor <= 200000){
      this.total = valor + 8300;
      this.costoFijo = 8300;
      this.comision = 0;
    } else if (valor >= 200001 && valor <= 500000){
      this.comision = ((valor * 3) / 100);
      this.total = valor + 3000 + this.comision;
      this.costoFijo = 3000;
    } else if (valor >= 500001 && valor <= 3000000) {
      this.comision = ((valor * 2.99) / 100);
      this.total = valor + 3000 + this.comision;
      this.costoFijo = 3000;
    } else {
      this.total = 0;
      this.comision = 0;
      this.costoFijo = 0;
    }
  }
}
