import { Routes } from '@angular/router';
import { IssuesComponent } from './issues';

/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
export const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/issues' },
    { path: 'issues', pathMatch: 'full', component: IssuesComponent },
];
