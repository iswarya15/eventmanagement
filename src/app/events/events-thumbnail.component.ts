import { Component, Input, Output, OnInit } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'events-thumbnail',
    templateUrl: './events-thumbnail.component.html',
   styles: [`.pad-left{margin-left: 10px} 
                .well div{color: #bbb}`
   ]
})

export class EventsThumbnailComponent{
    @Input() currEvent:any
    someProp: any = "some value"

    
    
}