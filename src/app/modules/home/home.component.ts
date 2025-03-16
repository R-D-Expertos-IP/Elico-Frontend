import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  public datosUsuario: {}
  ngOnInit(): void {
    this.datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'))
  }



}
