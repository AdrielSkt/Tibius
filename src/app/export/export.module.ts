import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import { QuillModule } from 'ngx-quill';
import {DockModule} from 'primeng/dock';
import {EditorModule} from 'primeng/editor';
import { HttpClientModule } from '@angular/common/http'; 
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DockModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    HttpClientModule,
    QuillModule.forRoot(),
    EditorModule,
    InputTextModule,
    FormsModule,
     ReactiveFormsModule
  ],
  exports: [
    DockModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    HttpClientModule,
    QuillModule,
    EditorModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
    


  ],
})
export class ExportModule { }
