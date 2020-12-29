import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PrincipalState } from '../shared/principal.state';
import { Principal } from '../shared/principal.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  private principal: Principal;
  constructor(private store: Store<PrincipalState>, private router: Router) { }

  ngOnInit() {
    this.store.select('principal').subscribe(principal => {
      this.principal = principal;
    });
  }

  hasRoleUser(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE_USER') {
        hasRole = true;
      }
    });
    return hasRole;
  }

  hasRoleAdmin(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE_ADMIN') {
        hasRole = true;
      }
    });
    return hasRole;
  }
    login(){
        this.router.navigateByUrl('/home/(contentOutlet:rendez_vous)');
    }
    fiche(){
        this.router.navigateByUrl('/home/(contentOutlet:fiche)');
    }
    facture(){
        this.router.navigateByUrl('/home/(contentOutlet:facture)');
    }
    dashboard(){
        this.router.navigateByUrl('/home/(contentOutlet:dashboard)');
    }
  Utilisateur(){
        this.router.navigateByUrl('/home/(contentOutlet:user)');
    }
    diagnostic(){
          this.router.navigateByUrl('/home/(contentOutlet:dossier)');
      }
}
