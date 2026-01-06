import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css',
})
export class AppMenuComponent {}
