import { Component, OnInit } from '@angular/core';
import { Preferencias } from '../classes/preferencias';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  defenicao : Preferencias = new Preferencias("blue", "red");
  name : string = "Vitor";
  arrayAnimais : Array<string> = ["cao","gato", "papagaio", "texugo"];

  changeName(event){
    this.name = event.target.value;
  }
}
