import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { Test3Component } from './test3/test3.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    
    TestComponent,
    
    Test1Component,
    
    Test3Component,
    
    SlideshowComponent,
    
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
     FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
