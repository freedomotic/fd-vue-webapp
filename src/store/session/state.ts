import { AuthData } from 'src/models/auth.model';

export interface State {
  auth: AuthData | null
}

export const state: State = {
  auth: null
}


export default state
