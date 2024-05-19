import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home',
        loadComponent: () => import('./components/pages/home-page/home-page.component').then( c => c.HomePageComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./components/pages/about-page/about-page.component').then( c => c.AboutPageComponent)
    },
    {
        path: 'catalog',
        loadComponent: () => import('./components/pages/catalog-page/catalog-page.component').then( c => c.CatalogPageComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./components/pages/contact-page/contact-page.component').then( c => c.ContactPageComponent)
    },
    { path: '**', redirectTo: 'not-found-page' }
];
