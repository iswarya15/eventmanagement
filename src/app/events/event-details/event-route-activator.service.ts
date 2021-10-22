import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "../shared/event.service";

@Injectable()

export class EventRouteActivator implements CanActivate{
    constructor(private eventService: EventService, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot): any{
       const eventExist = !!this.eventService.getEvent(Number(route.params['id']));

       if(!eventExist){
           this.router.navigate(['/404'])}
        
       return eventExist;
       
    //    return !eventExist;
    }
}