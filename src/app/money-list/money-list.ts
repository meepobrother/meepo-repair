import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'money-list',
    templateUrl: './money-list.html',
    styleUrls: ['./money-list.scss']
})
export class MoneyListComponent implements OnInit {
    on: string = 'all';
    constructor() { }

    ngOnInit() { }

    onUsed(){
        this.on = 'used';
    }

    onAll(){
        this.on = 'all';
    }

    onUnUse(){
        this.on = 'unuse';
    }
}