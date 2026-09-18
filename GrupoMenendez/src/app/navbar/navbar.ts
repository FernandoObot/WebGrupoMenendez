import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
  imports: [RouterLink],
})
export class Navbar {}
