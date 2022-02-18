import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import { Musica } from '../models/musica';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  texto: any;
  letra: String;
  blured = false
  focused = false



  criarMusica : FormGroup;


  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    this.criarMusica = this.fb.group({
      autor: [''],
      nomeMusica: [''],
      letra: ['']
  }

    );

  }


  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    this.texto= event;
    this.criarMusica.get('letra')?.setValue(this.texto);

    
  }

  salvarMusica(): void {
    console.log(this.criarMusica);
  }



}
