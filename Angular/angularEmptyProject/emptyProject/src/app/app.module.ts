import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
import { CountryService } from './shared/services/country.service';
import { HttpClientModule, HttpHeaders, HttpResponse, HttpClient } from '@angular/common/http';
import { UserService } from './shared/services/user.service';
import { UserListComponent } from './Components/user-list/user-list.component';
import { RoutingComponent } from './Components/routing/routing.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'formsValidation/userList', component: UserListComponent },
  // { path: 'formsValidation/home', component: UserListComponent },
  { path: 'formsValidation/addUser', component: RegisterComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserListComponent,
    RoutingComponent

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CountryService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
