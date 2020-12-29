import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { FicheService } from './fiche.service';

@Injectable()
export class FicheResolver implements Resolve<any>{
  constructor(private ficheService:FicheService){

}
resolve(){
  return this.ficheService.getFiche();
}
}
