import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { MainModule } from './main/main.module';
import { CountryService } from './service/country.service';
import { CustomerService } from './service/customer.service';
import { EventService } from './service/event.service';
import { IconService } from './service/icon.service';
import { NodeService } from './service/node.service';
import { PhotoService } from './service/photo.service';
import { ProductService } from './service/product.service';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        MainModule
    ],
    providers: [
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
