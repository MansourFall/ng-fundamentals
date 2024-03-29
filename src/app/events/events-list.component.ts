import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from '../common/toastr.service';
declare let toastr;
@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail  [event]="event" (click)="handleClick(event.name)"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: any[];
    constructor(private eventService: EventService,private toastrService: ToastrService) {
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleClick(eventName) {
        this.toastrService.success(eventName);
    }
}