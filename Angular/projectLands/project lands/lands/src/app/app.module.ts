import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CountriesComponent } from './countries/countries.component';
import { RoutingComponent } from './routing/routing.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{FormsModule}from "@angular/forms";
import { HttpClientModule, HttpHeaders, HttpResponse, HttpClient } from '@angular/common/http';
const appRoutes: Routes = [
  // { path: 'test/home', component: HomeComponent },
  { path: 'test/home', component: HomeComponent },
  { path: 'test/countries',      component: CountriesComponent }
 
];
@NgModule({
  //declarations pipes & components
  //כל הקומפוננטות שמשתמשים בהם בפרויקט הזה
  declarations: [
    AppComponent,
    LayoutComponent,
    CountriesComponent,
    RoutingComponent,
    HomeComponent,
    
    
  ],
  //שירותים חיצוניים
  //מודולים חיצוניים של שירותים שהוספנו
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
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
