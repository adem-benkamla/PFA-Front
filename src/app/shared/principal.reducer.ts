import {Action} from '@ngrx/store';
import {SAVE_PRINCIPAL} from '../shared/save.principal.action';
import { SavePrincipalAction } from '../shared/save.principal.action';
import {Principal} from '../shared/principal.model';
export function principalReducer(state: Principal, action:SavePrincipalAction  ) {
  switch (action.type) {
  case SAVE_PRINCIPAL:
  return Object.assign({},state, action.payload);
  break;
  default:
return state;
  }
}
