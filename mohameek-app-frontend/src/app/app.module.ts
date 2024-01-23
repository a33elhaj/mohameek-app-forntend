import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-home-page/header/header.component';
import { FooterComponent } from './main-home-page/footer/footer.component';
import { OurAppSectionComponent } from './main-home-page/our-app-section/our-app-section.component';
import { MiddleMenuComponent } from './main-home-page/middle-menu/middle-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './main-home-page/register/register.component';
import { HomeComponent } from './main-home-page/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OurAppSectionComponent,
    MiddleMenuComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
