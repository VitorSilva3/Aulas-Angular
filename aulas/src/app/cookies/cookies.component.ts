import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aceitarCookie : boolean;

  aceitarCookies(ctn:HTMLElement) {
    localStorage.setItem("cookie","1");
    ctn.style.display = "none";
    this.aceitarCookie = true;
  }

  lerCookies(){
    this.aceitarCookie = localStorage.getItem("cookie") == "1" ? true : false;
  }
}
