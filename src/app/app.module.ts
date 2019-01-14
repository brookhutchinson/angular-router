// modules
import { NgModule }           from '@angular/core';
import { AppRoutingModule }   from './app-routing.module';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

// components
import { AboutComponent }     from './components/about/about.component';
import { AppComponent }       from './app.component';
import { HomeComponent }      from './components/home/home.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { NavbarComponent }    from './components/navbar/navbar.component';

@NgModule({
  // modules
  imports: [ AppRoutingModule, BrowserModule, FormsModule, HttpClientModule ],
  // components
  declarations: [ AboutComponent, AppComponent, HomeComponent, JumbotronComponent, NavbarComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}