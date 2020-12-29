import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { FactureService } from './facture.service';

@Injectable()
export class FactureResolver implements Resolve<any>{
  constructor(private factureService:FactureService){

}
resolve(){
  return this.factureService.getFacture();
}
}
