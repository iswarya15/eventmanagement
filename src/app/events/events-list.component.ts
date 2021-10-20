import { Component, Output } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";

declare let toastr:any

@Component({
    selector: 'events-list',
    template: `<div>
                    <h1>Upcoming Angular Events</h1>
                    <hr>
                    <div class="row">
                    <div class="col-md-4" *ngFor="let event of events">
                    <events-thumbnail (click)="handleThumbnailClick(event.name)" [currEvent]="event"></events-thumbnail> 
                    </div>
                    </div>
                  </div>` 
})

export class EventsListComponent{
  events: any[] = [];



    constructor(private eventService: EventService, private toastrService: ToastrService){
      
    }
      ngOnInit(){
        // console.log(this.events);
        // console.log(this.events.length)
        this.events = this.eventService.getEvents();
    }
    handleThumbnailClick(eventName:string){
      this.toastrService.success(eventName)
    }
}