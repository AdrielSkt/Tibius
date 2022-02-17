import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'musicas', loadChildren: () => import('./musicas/musicas.module').then(x => x.MusicasModule)}

//   { 
//     path: 'navigation',loadChildren: () => import('./navigation/navigation.module').then(x => x.NavigationModule)
//  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
