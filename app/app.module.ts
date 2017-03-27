import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { AboutComponent} from './about/about.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginPage } from './login/login-form.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path:'about', component: AboutComponent },
      { path:'login', component:LoginPage },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    LoginPage
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
