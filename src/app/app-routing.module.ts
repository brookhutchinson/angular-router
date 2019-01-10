// modules
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// define routes
const routes: Routes = [];

@NgModule({
  // import modules
  imports: [ RouterModule.forRoot(routes) ],
  // export modules
  exports: [ RouterModule ]
})
export class AppRoutingModule {}