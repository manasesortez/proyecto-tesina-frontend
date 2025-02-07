import { Component, ElementRef, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/core/services/app.layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService, public el: ElementRef) { }

  ngOnInit() {
    this.model = [
        {
            label: 'Home',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
            ]
        },
        {
            label: 'Menu',
            items: [
                { label: 'Subastas', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                { label: 'Proyectos', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                { label: 'Favoritos', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                { label: 'Usuarios', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
            ]
        },
    ];
  }
}
