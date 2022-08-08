import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForBusinessPageComponent } from './for-business-page/for-business-page.component'; 
import { PrivateClientsPageComponent } from './private-clients-page/private-clients-page.component';
import { VacancyPageComponent } from './vacancy-page/vacancy-page.component';
import { VacancySpecialComponent } from './vacancy-special/vacancy-special.component';

import { BalancesPageComponent } from './admin-page/balances-page/balances-page.component';
import { PacketsPageComponent } from './admin-page/packets-page/packets-page.component';
import { SettingsPageComponent } from './admin-page/settings-page/settings-page.component';
import { TarifsPageComponent } from './admin-page/tarifs-page/tarifs-page.component';
import { TraficsPageComponent } from './admin-page/trafics-page/trafics-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SlickComponent } from './slick/slick.component';
import { AditionalPacketPageComponent } from './admin-page/aditional-packet-page/aditional-packet-page.component';

const routes: Routes = [
  { path: '', component: PrivateClientsPageComponent },
  { path: 'b2b', component: ForBusinessPageComponent },
  { path: 'vacancy', component: VacancyPageComponent }, 
  { path: 'vacancy-special/:id', component: VacancySpecialComponent}, 
  { path: 'admin', component:AdminPageComponent },
  { path: 'tarifs/:id', component:TarifsPageComponent },
  { path: 'balance', component:BalancesPageComponent },
  { path: 'trafics', component:TraficsPageComponent },
  { path: 'packet', component:PacketsPageComponent },
  // { path: 'setting', component:SettingsPageComponent },
  { path: 'additionalPackage', component: AditionalPacketPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
