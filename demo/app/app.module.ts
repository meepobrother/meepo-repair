import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RepairModule } from '../../src/app/app';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

let routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'repair/index'
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RepairModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

