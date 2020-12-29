import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { RendezVousService} from './rendez_vous.service';

@Injectable()
export class RendezVousResolver implements Resolve<any>{
  constructor(private rendezVousService: RendezVousService){

}
resolve(){
  return this.rendezVousService.getRendezVous();
}
}
