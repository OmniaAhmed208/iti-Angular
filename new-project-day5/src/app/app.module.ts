import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddUserComponent } from './finalProject/add-user/add-user.component';
import { UpdateUserComponent } from './finalProject/update-user/update-user.component';
import { UsersComponent } from './finalProject/users/users.component';
import { ErrorPageComponent } from './finalProject/error-page/error-page.component';
import { HeaderPageComponent } from './finalProject/header-page/header-page.component';
import { UserDetailsComponent } from './finalProject/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UpdateUserComponent,
    UsersComponent,
    ErrorPageComponent,
    HeaderPageComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
