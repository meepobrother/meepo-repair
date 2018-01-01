import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ticket-list',
    templateUrl: './ticket-list.html',
    styleUrls: ['./ticket-list.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TicketListComponent implements OnInit {
    on: string = 'unuse';
    constructor() { }

    ngOnInit() { }

    onUnUse() {
        this.on = 'unuse';
    }
    onUsed() {
        this.on = 'used';
    }
    onDelete() {
        this.on = 'delete';
    }

}