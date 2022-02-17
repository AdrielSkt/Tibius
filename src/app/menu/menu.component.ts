import { Component, OnInit } from '@angular/core';
import { Itens } from './models/itens';
import { MenuService } from './service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

 itens: Itens [];
 

	responsiveOptions;

	constructor(private menuService: MenuService) {
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

  ngOnInit() {
    this.menuService.buscarItens().subscribe(element => {
      this.itens = element
      console.log(this.itens);

    });
    
  
     
    }

}
