import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from "./profile.component";
const routes: Routes = [
    {path: 'profile', component: ProfileComponent}
];

@NgModule({
    // forChild since this is a feature Module
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }