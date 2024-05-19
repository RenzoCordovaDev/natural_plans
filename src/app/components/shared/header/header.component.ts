import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public optionsList: any = [];

  ngOnInit(): void {
    this.onLoadOptionsList();
  }

  onLoadOptionsList() {
    this.optionsList.push(
     { name: 'home', route: '/home', text: 'Inicio'},
     { name: 'catalog', route: '/catalog', text: 'Catálogo'},
     { name: 'about', route: '/about', text: 'Nosotros'},
     { name: 'contact', route: '/contact', text: 'Contacto'}
    )
  } 
}
