import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeepoFormsModule } from 'meepo-forms';
import { XscrollModule } from 'meepo-xscroll';
import { StoreModule } from 'meepo-store';


import { RepairIndexComponent } from './repair-index/repair-index';
import { RepairRootComponent } from './repair-root/repair-root';

import { CarEditorComponent } from './car-editor/car-editor';
import { CarListComponent } from './car-list/car-list';
import { TicketListComponent } from './ticket-list/ticket-list';
import { OrderListComponent } from './order-list/order-list';
import { MoneyListComponent } from './money-list/money-list';

import { MyInfofComponent } from './my-info/my-info';



import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
    component: CarEditorComponent,
    path: 'repair/car/editor'
}, {
    component: CarListComponent,
    path: 'repair/car/list'
}, {
    component: RepairIndexComponent,
    path: 'repair/index'
}, {
    component: TicketListComponent,
    path: 'repair/ticket/list'
}, {
    component: OrderListComponent,
    path: 'repair/order/list'
}, {
    component: MoneyListComponent,
    path: 'repair/money/list'
}, {
    component: MyInfofComponent,
    path: 'repair/my/info'
}];

@NgModule({
    declarations: [
        RepairIndexComponent,
        CarEditorComponent,
        CarListComponent,
        RepairRootComponent,
        TicketListComponent,
        OrderListComponent,
        MoneyListComponent,
        MyInfofComponent
    ],
    imports: [
        CommonModule,
        MeepoFormsModule,
        XscrollModule,
        RouterModule.forChild(routes),
        StoreModule
    ],
    exports: [
        RepairIndexComponent,
        CarEditorComponent,
        CarListComponent,
        RepairRootComponent,
        TicketListComponent,
        OrderListComponent,
        MoneyListComponent,
        MyInfofComponent
    ],
    providers: [],
})
export class RepairModule { }

