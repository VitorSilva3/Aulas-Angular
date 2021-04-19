import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/classes/animal';

@Component({
  selector: 'app-animalreader',
  templateUrl: './animalreader.component.html',
  styleUrls: ['./animalreader.component.css']
})
export class AnimalreaderComponent implements OnInit {

  @Input() animalSerLido : Animal;
  constructor() { }

  ngOnInit(): void {
  }

}
