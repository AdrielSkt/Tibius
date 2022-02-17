import {Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Itens } from "../models/itens";

@Injectable({
    providedIn: 'root'
  })

export class MenuService{
baseUrl: String = environment.apiUrl;


constructor(private httClient: HttpClient) { }



buscarItens(): Observable<Itens[]>{
    const url = `${this.baseUrl}/itens`;
    return this.httClient.get<Itens[]>(url);

}


}