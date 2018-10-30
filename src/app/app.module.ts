import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import {ReactiveFormsModule}
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestService } from './services/test.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { TestSelectComponent } from './test-select/test-select.component';
import { AppRoutingModule } from './app-routing.module';
import { TestSummaryComponent } from './test-summary/test-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RegisterComponent,
    LoginComponent,
    TestSelectComponent,
    TestSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    TestService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
