import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OutletContext, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu'; // Import MenuModule
import { ChartModule } from 'primeng/chart'; // Import ChartModule
import { AuctionsComponent } from './auctions/auctions.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ProjectComponent } from './project/project.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'auctions',
        component: AuctionsComponent
      },
      {
        path: 'projects',
        component: ProjectComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    AuctionsComponent,
    ProjectComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TableModule,
    MenuModule,
    ChartModule,

    StyleClassModule,
    PanelMenuModule,

    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,

    RouterModule.forChild(routes)
  ],
  providers: [
    OutletContext
  ]
})
export class PagesModule { }
