import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HttpClientModule } from '@angular/common/http';
import { IntroComponent } from './intro/intro.component';
import { PlaygroundComponent } from './playground/playground.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LexorankComponent } from './lexorank/lexorank.component';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';
import { AlgorithmsHomeComponent } from './algorithms-home/algorithms-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    IntroComponent,
    PlaygroundComponent,
    LexorankComponent,
    HomeComponent,
    TopicComponent,
    AlgorithmsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
