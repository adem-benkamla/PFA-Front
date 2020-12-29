import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FicheComponent} from './fiche/fiche.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FactureResolver} from './facture/facture.resolver';
import {FicheResolver} from './fiche/fiche.resolver';
import {UserResolver} from './user/user.resolver';
import { UserComponent } from './user/user.component';
import {RendezVousResolver} from './rendez-vous/rendez_vous.resolver';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DossierComponent } from './dossier/dossier.component';
import {FactureComponent} from './facture/facture.component';

export const appRoutes: Routes = [
  {  path: '',  redirectTo: '/accueil',  pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
    {path: 'accueil', component: AccueilComponent},
  {path: 'home', component: HomeComponent,
  children: [
    {path: 'fiche',
    component: FicheComponent,
      resolve:{
        fiche: FicheResolver
      },
      outlet: 'contentOutlet'
    },


      {path: 'rendez_vous',
      component: RendezVousComponent,
        outlet:'contentOutlet',
        resolve:{
          rendez_vous: RendezVousResolver

        }},
        {path: 'facture',
        component: FactureComponent,
          resolve:{
            fiche: FactureResolver
          },
          outlet: 'contentOutlet'
        },
{path: 'user',
component: UserComponent,
outlet:'contentOutlet',
resolve:{
  user: UserResolver
}},
{path: 'dashboard',
component: DashboardComponent,
outlet:'contentOutlet'},
{path: 'dossier',
component: DossierComponent,
outlet:'contentOutlet'}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )],
  exports: [RouterModule],
  providers: [FicheResolver, RendezVousResolver,UserResolver,FactureResolver]

})
export class AppRoutingModule { }
