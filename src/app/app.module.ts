import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ImgsliderComponent } from './imgslider/imgslider.component';
import { StudentsComponent } from './registerationStudentsComponent/students/students.component';
import { RegistrationComponent } from './registerationStudentsComponent/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ImgsliderComponent,
    StudentsComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
