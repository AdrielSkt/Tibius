import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {EditorModule} from 'primeng/editor';
import { QuillModule } from 'ngx-quill';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { HttpClientModule } from '@angular/common/http'; 


import {DockModule} from 'primeng/dock';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    DockModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    HttpClientModule,
    QuillModule

    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
