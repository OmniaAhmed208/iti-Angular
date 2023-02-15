import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ImgsliderComponent } from './imgslider/imgslider.component';
import { StudentsComponent } from './registerationStudentsComponent/students/students.component';
import { RegistrationComponent } from './registerationStudentsComponent/registration/registration.component';
import { HeaderComponent } from './routring/header/header.component';
import { RegisterComponent } from './routring/register/register.component';
import { ProfileComponent } from './routring/profile/profile.component';
import { DetailsComponent } from './routring/details/details.component';
import { ErrorComponent } from './routring/error/error.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
  {path:'',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'profile/:id',component:DetailsComponent},
  {path:'**',component:ErrorComponent},
]

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
