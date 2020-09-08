import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyPostFormComponent } from './user/my-feeds-page/my-post-form/my-post-form.component';
import { MyFeedsBodyComponent } from './user/my-feeds-page/my-feeds-body.component';
import { MyFeedsComponent } from './user/my-feeds-page/my-feeds/my-feeds.component';
import { FeedCardComponent } from './shared/feed-card/feed-card.component';
import { AllFeedsComponent } from './user/home/all-feeds/all-feeds.component';
import { CommentsCardComponent } from './shared/comments-card/comments-card.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MyPostFormComponent,
    MyFeedsBodyComponent,
    MyFeedsComponent,
    FeedCardComponent,
    AllFeedsComponent,
    CommentsCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
