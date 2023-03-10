import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// lab 1
import { FirstComponent } from './first/first.component';
import { ImgsliderComponent } from './imgslider/imgslider.component';
// registration
import { StudentsComponent } from './registerationStudentsComponent/students/students.component';
import { RegistrationComponent } from './registerationStudentsComponent/registration/registration.component';
import { HeaderComponent } from './routring/header/header.component';
import { RegisterComponent } from './routring/register/register.component';
import { ProfileComponent } from './routring/profile/profile.component';
import { DetailsComponent } from './routring/details/details.component';
import { ErrorComponent } from './routring/error/error.component';
// final project pages
import { AddUserComponent } from './finalProject/add-user/add-user.component';
import { UpdateUserComponent } from './finalProject/update-user/update-user.component';
import { UsersComponent } from './finalProject/users/users.component';
import { ErrorPageComponent } from './finalProject/error-page/error-page.component';
import { HeaderPageComponent } from './finalProject/header-page/header-page.component';
import { UserDetailsComponent } from './finalProject/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';

// const routes:Routes = [
//   {path:'',component:RegisterComponent},
//   {path:'profile',component:ProfileComponent},
//   {path:'profile/:id',component:DetailsComponent},
//   {path:'**',component:ErrorComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ImgsliderComponent,
    StudentsComponent,
    RegistrationComponent,
    HeaderComponent,
    RegisterComponent,
    ProfileComponent,
    DetailsComponent,
    ErrorComponent,
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
    // RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
