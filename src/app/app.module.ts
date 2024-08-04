import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { CaaqmsComponent } from './caaqms/caaqms.component';
import { CemsComponent } from './cems/cems.component';
import { EqmsComponent } from './eqms/eqms.component';
import { PortComponent } from './port/port.component';
import { WaterComponent } from './water/water.component';
import { AnalyticalComponent } from './analytical/analytical.component';
import { GasComponent } from './gas/gas.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    ContactComponent,
    CaaqmsComponent,
    CemsComponent,
    EqmsComponent,
    PortComponent,
    WaterComponent,
    AnalyticalComponent,
    GasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }