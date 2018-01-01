import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'order-list',
    templateUrl: './order-list.html',
    styleUrls: ['./order-list.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OrderListComponent implements OnInit {
    on: string = 'doing';
    constructor() { }

    ngOnInit() { }

    onDoing() {
        this.on = 'doing';
    }

    onPay() {
        this.on = 'pay';
    }

    onFinish() {
        this.on = 'finish';
    }
}