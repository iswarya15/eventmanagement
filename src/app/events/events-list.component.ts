import { Component, Output } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from '@angular/router'
declare let toastr:any

@Component({
    templateUrl: './events-list.component.html' 
})

export class EventsListComponent{
  events: any = [];



    constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute){
      
    }
      ngOnInit(){
        // console.log(this.events);
        // console.log(this.events.length)
        // receiving data from router
        this.events = this.route.snapshot.data['events'];
    }
    handleThumbnailClick(eventName:string){
      this.toastrService.success(eventName)
    }
}