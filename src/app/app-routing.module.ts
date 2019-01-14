// modules
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AboutComponent }       from './components/about/about.component';
import { HomeComponent }        from './components/home/home.component';

// define routes
const routes: Routes = [
  // home route
  { path: '', component: HomeComponent },
  // about route
  { path: 'about', component: AboutComponent }
];

@NgModule({
  // import modules
  imports: [ RouterModule.forRoot(routes) ],
  // export modules
  exports: [ RouterModule ]
})
export class AppRoutingModule {}