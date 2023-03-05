import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AppMenuitemComponent } from './menu/app.menuitem.component';
import { AppMenuComponent } from './menu/app.menu.component';
import { AppConfigModule } from './config/config.module';
import { TopBarComponent } from './top-bar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    TopBarComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    AppConfigModule,
  ],

  // CREAR CARPETA PARA CADA COMPONENTE DE LOS YA CREADOS DENTRO DEL MAIN
  exports: [MainComponent],
})
export class MainModule { }
