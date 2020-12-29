import {Injectable} from '@angular/core';
import {fiche} from '../shared/fiche';
@Injectable()
export class FicheMockService {
  private fiche: fiche[]=[];
    constructor(){
      let f1:fiche= new fiche(1,1234,'hjaij','fatma',23,23704263,'fhggyy');
      let f2:fiche= new fiche(2,15555,'hjaij','fatma',20,23704263,'fhggyy');
      this.fiche.push(f1);
      this.fiche.push(f2);

  }
  /**
   * getFiche
   */
  public getFiche(): fiche[] {
    return this.fiche;
  }
}
