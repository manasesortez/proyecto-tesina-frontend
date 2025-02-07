import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutletContext } from '@angular/router';
import { CoreModule } from './core/core.module';
import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './core/guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    PublicModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    OutletContext
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
