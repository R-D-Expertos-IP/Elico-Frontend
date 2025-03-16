import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuPrincipal: any
  public datosUsuario: {}
  public roles: any

  constructor(
    private router: Router,

  ) {

  }

  ngOnInit(): void {


  }


}



