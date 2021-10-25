import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./event.service";
import { map } from 'rxjs/operators'
@Injectable()
export class EventsListResolver implements Resolve<any> {

    constructor(private eventService: EventService){

    }

    resolve() {
        console.log('Inside resolve')
        return this.eventService.getEvents().pipe(map(events => events))
    }
}
