import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { ContactRegisterComponent } from './contact-register/contact-register.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsListComponent,
    ContactProfileComponent,
    ContactRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule 
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
