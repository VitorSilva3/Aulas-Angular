import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-escolhe-animal',
  templateUrl: './escolhe-animal.component.html',
  styleUrls: ['./escolhe-animal.component.css']
})
export class EscolheAnimalComponent implements OnInit {

  @Input() especie;
  constructor() { }

  ngOnInit(): void {
  }

}
