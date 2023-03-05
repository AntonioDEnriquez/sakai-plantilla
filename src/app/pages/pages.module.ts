import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { CrudComponent } from './crud/crud.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './login/login.component';
import { MainModule } from '../main/main.module';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  declarations: [
    CrudComponent,
    HomeComponent,
    LoginComponent,
    PagesComponent,
  ],
  imports: [
    ButtonModule,
    ChartModule,
    CheckboxModule,
    CommonModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    FormsModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MainModule,
    MenuModule,
    PagesRoutingModule,
    PanelMenuModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    ReactiveFormsModule,
    RippleModule,
    StyleClassModule,
    TableModule,
    TableModule,
    ToastModule,
    ToolbarModule
  ],
})
export class PagesModule { }
