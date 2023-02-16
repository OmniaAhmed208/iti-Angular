import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './finalProject/add-user/add-user.component';
import { ErrorPageComponent } from './finalProject/error-page/error-page.component';
import { UpdateUserComponent } from './finalProject/update-user/update-user.component';
import { UserDetailsComponent } from './finalProject/user-details/user-details.component';
import { UsersComponent } from './finalProject/users/users.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'users/:id',component:UsersComponent},
  {path:'add-new-user',component:AddUserComponent},
  {path:'user-details/:id',component:UserDetailsComponent},
  {path:'update-user/:id',component:UpdateUserComponent},
  {path:'**',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
