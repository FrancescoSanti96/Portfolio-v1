import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { NavComponent } from './nav/nav.component';
import { AboutMeComponent } from './about-me/about-me.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    Test2Component,
    NavComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'test', component: TestComponent },
      { path: 'test2', component: Test2Component },
      { path: 'aboutMe', component: AboutMeComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
