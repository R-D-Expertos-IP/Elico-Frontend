import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../../../../shared/services/error.service';
import { HeaderService } from './services/header.service';

interface MenuItem {
  label: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(
    public toast: ToastrService,
    private errorService: ErrorService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this.cargarCabeceraDesdeBD();
  }

  cargarCabeceraDesdeBD(): void {
    this.headerService.getHeaderMenu().subscribe({
      next: (res) => {
        this.menuItems = res.menu_items;
      },
      error: (err) => {
      },
    });
  }
}
