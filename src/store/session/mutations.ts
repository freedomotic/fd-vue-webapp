import { State } from './state';
import { AuthData } from 'src/models/auth.model';

export function setAuth(state: State, auth: AuthData) {
  state.auth = auth
}
