import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'meepo-store';
import { myCarList, myCreateCarList } from '../db';
import { XscrollComponent } from 'meepo-xscroll';
@Component({
    selector: 'car-list',
    templateUrl: './car-list.html',
    styleUrls: ['./car-list.scss']
})
export class CarListComponent implements OnInit {
    my: string = 'my';
    @ViewChild('xscroll') xscroll: XscrollComponent;
    @Input() items: any[] = [];
    page: number = 1;
    psize: number = 5;
    constructor(
        public router: Router,
        public store: StoreService
    ) { }

    ngOnInit() {
        this.getCars();
    }

    getCars() {
        if (this.my === 'my') {
            let items;
            if (this.page > 1) {
                let items = this.store.getList(myCarList, this.page, this.psize);
                this.items = [...this.items, ...items]
            } else {
                this.items = this.store.getList(myCarList, this.page, this.psize);
            }
        } else {
            let items;
            if (this.page > 1) {
                let items = this.store.getList(myCreateCarList, this.page, this.psize);
                this.items = [...this.items, ...items]
            } else {
                this.items = this.store.getList(myCreateCarList, this.page, this.psize);
            }
        }
    }

    onMore(e: any) {
        this.page++;
        this.getCars();
        e.next();
        setTimeout(()=>{
            this.xscroll.onEnd();
        },300);
    }

    myCar() {
        this.my = 'my';
        this.page = 1;
        this.items = [];
        this.getCars();
        this.xscroll.scrollTop();
    }

    myCreate() {
        this.my = 'my.create';
        this.page = 1;
        this.items = [];
        this.getCars();
        this.xscroll.scrollTop();
    }

    add() {
        this.router.navigate(['/repair/car/editor'], { queryParams: { my: this.my } });
    }

    editor(item: any) {
        this.router.navigate(['repair', 'car', 'editor'], { queryParams: { my: this.my, id: item.id } })
    }
}