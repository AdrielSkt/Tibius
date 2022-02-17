import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tibius';

  tibs!: String;

  dockItems!: MenuItem[];


  constructor(public router: Router) { }

  ngOnInit(): void {
    this.dockItems = [
      {
          label:'Menu',
          icon: "assets/Menu.png",
          routerLink: ['menu']
      },
    {
      label:'Musicas',
      icon: "assets/music.png",
      routerLink: ['musicas/read']
    }]
    this.tibs = "tibius is a tibs tibiused";
  }

  irParaMenu(): void {
    this.router.navigate(['/menu']);

  }

}