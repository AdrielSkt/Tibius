import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { MusicasReadComponent } from "./musicas-read/musicas-read.component";




const routes: Routes = [
    {path: 'read', component: MusicasReadComponent},
    {path: 'create', component: CreateComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}
)
export class MusicasRoutingModule{


}