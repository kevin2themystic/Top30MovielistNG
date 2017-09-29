import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AboutComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot([
          {
              path: '',
              redirectTo: '/about',
              pathMatch: 'full'
          },
          {
              path: 'about',
              component: AboutComponent
          },
          {
              path: 'movies',
              component: MoviesComponent
          }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
