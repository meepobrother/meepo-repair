import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StoreService } from 'meepo-store';
import { UuidService } from 'meepo-uuid';

import { myCarList, myCreateCarList } from '../db';

@Component({
    selector: 'car-editor',
    templateUrl: './car-editor.html'
})
export class CarEditorComponent implements OnInit {

    id: string;
    my: string = 'my';
    item: CarEditorDefault = new CarEditorDefault();
    items: CarEditorDefault[] = [];

    page: number = 1;
    psize: number = 5;
    constructor(
        public route: ActivatedRoute,
        public store: StoreService,
        public uuid: UuidService,
        public location: Location
    ) {
        this.route.queryParams.subscribe(res => {
            this.id = res.id;
            this.my = res.my
            this.getList();
            this.items.map((item: CarEditorDefault) => {
                if (item.id === this.id) {
                    this.item = item;
                }
            });
        });
    }

    ngOnInit() {

    }

    getList() {
        if (this.my === 'my') {
            this.items = this.store.getList<CarEditorDefault>(myCarList, this.page, this.psize);
        } else {
            this.items = this.store.getList<CarEditorDefault>(myCreateCarList, this.page, this.psize);
        }
    }

    saveToList() {
        if (this.my === 'my') {
            this.store.set(myCarList, this.items);
        } else {
            this.store.set(myCreateCarList, this.items);
        }
    }

    save() {
        if (this.item.id) {
            this.items.map(res => {
                if (res.id === this.item.id) {
                    res = this.item;
                }
            });
        } else {
            this.item.id = this.uuid.v1();
            this.items.push(this.item);
        }
        this.saveToList();
        this.location.back();
    }
}

export class CarEditorDefault {
    id: string = '';
    title: string = '';
    desc: string = '';
    carNum: string = '';
    jarNum: string = '';
    licheng: string = '';
    realname: string = '';
    mobile: string = '';
    image: string[] = [];
}