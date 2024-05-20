import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  optionsList: any = [];
  scrolled: boolean = false;

  ngOnInit(): void {
    this.onLoadOptionsList();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.screenY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrolled = offset > 50;
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
