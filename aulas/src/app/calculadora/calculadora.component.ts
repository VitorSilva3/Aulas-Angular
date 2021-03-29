import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num1;
  num2;

  tipoInput : string = "number";
  resultado : number = 0;
  sinal : string;
  informacao : string = "Coloque um numero e pressione \"Enter\"";

  trocar(event){
    if (event.key == "Enter") {
      if (this.tipoInput == "number") {
        this.tipoInput = "text";
        this.informacao = "Coloque o sinal da conta (+, -, *, /) e pressione \"Enter\"";
        if (this.resultado == 0) {
          this.resultado = +event.target.value;
        }
        else{
          if (this.sinal == "+") {
            this.resultado = this.resultado + +event.target.value;
          }
          else if (this.sinal == "-") {
            this.resultado = this.resultado - +event.target.value;
          }
          else if (this.sinal == "*") {
            this.resultado = this.resultado * +event.target.value;
          }
          else {
            this.resultado = this.resultado / +event.target.value;
        }
      }
        event.target.value = "";
      }
      else{
        if (event.target.value == "+") {
          this.sinal = "+";
          this.tipoInput = "number";
          this.informacao = "Coloque um numero e pressione \"Enter\"";
        }
        else if (event.target.value == "-") {
          this.sinal = "-";
          this.tipoInput = "number";
          this.informacao = "Coloque um numero e pressione \"Enter\"";
        }
        else if (event.target.value == "*") {
          this.sinal = "*";
          this.tipoInput = "number";
          this.informacao = "Coloque um numero e pressione \"Enter\"";
        }
        else if (event.target.value == "/") {
          this.sinal = "/";
          this.tipoInput = "number";
          this.informacao = "Coloque um numero e pressione \"Enter\"";
        }
        else{
          alert("Sinal Inválido!")
        }
      }
    }
  }
}
