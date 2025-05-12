import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then((m) => m.HomeComponent)
        },
    },
    {
        path: 'calculator',
        loadComponent: () => {
            return import('./calculator/calculator.component').then((m) => m.CalculatorComponent)
        },
    }
];
