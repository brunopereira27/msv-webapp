import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { FicheLegumeComponent } from './fiche-legume/fiche-legume.component';
import { VegetableReviewComponent } from './vegetable-review/vegetable-review.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FicheLegumeComponent,
    VegetableReviewComponent,
    NavbarComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
