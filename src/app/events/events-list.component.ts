import { Component, Output } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";

declare let toastr:any

@Component({
    templateUrl: './events-list.component.html' 
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