import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { ProfileComponent } from "./profile.component";


@NgModule({
    // Common module is imported instead of browser module 
    imports: [ CommonModule, UserRoutingModule],
    providers: [],
    declarations: [ProfileComponent]

})

export class UserModule {

}