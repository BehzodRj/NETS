import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateClientsPageComponent } from './private-clients-page/private-clients-page.component';
import { ForBusinessPageComponent } from './for-business-page/for-business-page.component';
import { VacancyPageComponent } from './vacancy-page/vacancy-page.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { VacancySpecialComponent } from './vacancy-special/vacancy-special.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PanelsComponent } from './private-clients-page/panels/panels.component';
import { SlickComponent } from './slick/slick.component';
  
import { BalancesPageComponent } from './admin-page/balances-page/balances-page.component';
import { PacketsPageComponent } from './admin-page/packets-page/packets-page.component';
import { SettingsPageComponent } from './admin-page/settings-page/settings-page.component';
import { TarifsPageComponent } from './admin-page/tarifs-page/tarifs-page.component';
import { TraficsPageComponent } from './admin-page/trafics-page/trafics-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MenuDashboardComponent } from './admin-page/menu-dashboard/menu-dashboard.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AditionalPacketPageComponent } from './admin-page/aditional-packet-page/aditional-packet-page.component';
import { HeaderMobiComponent } from './admin-page/header-mobi/header-mobi.component';
@NgModule({
  declarations: [
    AppComponent,
    PrivateClientsPageComponent,
    ForBusinessPageComponent,
    VacancyPageComponent,
    HeaderComponent,
    FooterComponent,
    VacancySpecialComponent,
    PanelsComponent,
    SlickComponent,
    MenuDashboardComponent,  
    AdminPageComponent,
    BalancesPageComponent,
    PacketsPageComponent,
    SettingsPageComponent,
    TarifsPageComponent,
    TraficsPageComponent,
    MenuDashboardComponent,
    AditionalPacketPageComponent,
    HeaderMobiComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
