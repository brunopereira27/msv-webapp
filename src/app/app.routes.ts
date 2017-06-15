import { Routes } from '@angular/router';

import { VegetableReviewComponent } from './vegetable-review/vegetable-review.component';


export const appRoutes: Routes = [
  { path: 'fiche', component: VegetableReviewComponent }
  //{ path: '**', component: PageNotFoundComponent }
];
