import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicasReadComponent } from './musicas-read/musicas-read.component';
import { MusicasRoutingModule } from './musicas-routing.module';
import { CreateComponent } from './create/create.component';
import { ExportModule } from '../export/export.module';





@NgModule({
  declarations: [
    MusicasReadComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    MusicasRoutingModule,
    ExportModule

  ]
})
export class MusicasModule { }
