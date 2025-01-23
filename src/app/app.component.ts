import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor (private router: Router) {}
  
  title = 'pruebaEnrutamiento';
}

