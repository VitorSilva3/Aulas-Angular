import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filhodoexp3',
  templateUrl: './filhodoexp3.component.html',
  styleUrls: ['./filhodoexp3.component.css']
})
export class Filhodoexp3Component implements OnInit {

  @Output() passaInfo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  evHappen(){
    this.passaInfo.emit("Valor Emitido");
  }

}
