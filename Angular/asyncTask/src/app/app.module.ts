import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TimeRangeInputComponent } from './components/time-range-input/time-range-input.component';
import { PackageInputComponent } from './components/package-input/package-input.component';
import { PackageListComponent } from './components/package-list/package-list.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TimeRangeInputComponent,
    PackageInputComponent,
    PackageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
