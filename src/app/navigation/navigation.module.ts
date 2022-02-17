import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navigationRoutingModule } from './navigation-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    TopBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    navigationRoutingModule
  ],
  exports:[
    TopBarComponent,
    FooterComponent,

  ]
})
export class NavigationModule { }
