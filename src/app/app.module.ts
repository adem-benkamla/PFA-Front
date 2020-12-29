import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FicheComponent} from './fiche/fiche.component';
import {FicheMockService} from './fiche/fiche.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FicheService} from './fiche/fiche.service';
import {UserService} from './user/user.service';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import {RendezVousService} from './rendez-vous/rendez_vous.service';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppService} from './app.service';
import { XhrInterceptor } from './xhr.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { principalReducer} from './shared/principal.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DossierComponent } from './dossier/dossier.component';


import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { FooterComponent } from './footer/footer.component';

import { DropdownModule, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import {ChartModule} from 'angular2-chartjs';
import { MyChartComponent } from './my-chart/my-chart.component';
import { DiagnostiqueComponent } from './diagnostique/diagnostique.component';
import { FactureComponent } from './facture/facture.component';
import {FactureService} from './facture/facture.service';
import {DpDatePickerModule} from 'ng2-date-picker';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    FicheComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    RendezVousComponent,

    LoginComponent,
    HomeComponent,
    UserComponent,
    DossierComponent,
    UploadFilesComponent,
    FooterComponent,
    MyChartComponent,
    DiagnostiqueComponent,
    FactureComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
      StoreModule.forRoot({principal: principalReducer}),
    HttpClientModule,
    NgbModule,
      DropdownModule.forRoot(),
      ChartModule,
      DpDatePickerModule
  ],
  providers: [FicheMockService,UserService,FactureService,
              FicheService,RendezVousService,AppService,
            { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
                CookieService, MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
