import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeepoFormsModule } from 'meepo-forms';
import { XscrollModule } from 'meepo-xscroll';
import { StoreModule } from 'meepo-store';


import { RepairIndexComponent } from './repair-index/repair-index';
import { CarEditorComponent } from './car-editor/car-editor';
import { CarListComponent } from './car-list/car-list';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
    component: CarEditorComponent,
    path: 'repair/car/editor'
}, {
    component: CarListComponent,
    path: 'repair/car/list'
}, {
    component: RepairIndexComponent,
    path: 'repair'
}];

@NgModule({
    declarations: [
        RepairIndexComponent,
        CarEditorComponent,
        CarListComponent
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
        CarListComponent
    ],
    providers: [],
})
export class RepairModule { }

