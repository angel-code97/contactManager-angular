import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../../shared/components/app-header.component/app-header.component';
import { AppMenuComponent } from '../../shared/components/app-menu.component/app-menu.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, AppHeaderComponent, AppMenuComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {}
