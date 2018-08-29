import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import{FormsModule}from "@angular/forms";
import { HttpClientModule, HttpHeaders, HttpResponse, HttpClient } from '@angular/common/http';
import { MyEnumComponent } from './my-enum/my-enum.component';
@NgModule({
  //declarations pipes & components
  //כל הקומפוננטות שמשתמשים בהם בפרויקט הזה

   declarations: [
    AppComponent,
    MyEnumComponent
  ],
  //שירותים חיצוניים
  //מודולים חיצוניים של שירותים שהוספנו
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
 //servises
  providers: [],
  //boot with this page
  bootstrap: [AppComponent]
})
export class AppModule { }
