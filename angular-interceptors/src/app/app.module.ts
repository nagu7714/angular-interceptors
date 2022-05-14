import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpserviceService } from './httpservice.service';
import{HeaderInterceptor} from './header.interceptor';
import {ResonseloggingInterceptor} from './resonselogging.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpserviceService,
    { /* we can add multiple interceptors and it will execute in an order as provided here. */
      provide: HTTP_INTERCEPTORS,useClass:HeaderInterceptor,multi:true // Request interceptor
    },
    {
      provide:HTTP_INTERCEPTORS,useClass:ResonseloggingInterceptor,multi:true // Response interceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
