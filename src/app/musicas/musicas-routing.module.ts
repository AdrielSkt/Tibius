import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MusicasReadComponent } from "./musicas-read/musicas-read.component";




const routes: Routes = [
    {path: 'read', component: MusicasReadComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}
)
export class MusicasRoutingModule{


}