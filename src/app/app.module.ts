import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { ProposalComponent } from './proposal/proposal.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    HomeComponent,
    ProposalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
