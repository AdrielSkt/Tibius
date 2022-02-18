import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';




import { MenuComponent } from './menu/menu.component';
import { ExportModule } from './export/export.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    ExportModule

      
    
    

    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
