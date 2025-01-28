import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor (private router: Router) {}
  
  title = 'pruebaEnrutamiento';
}

export class ButtonOverviewExample {}


