import {createReducer, on, Action} from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'
import {registerAction} from './actions'

const initialSatiate: AuthStateInterface = {
  isSubmitting: false,
}

const authReducer = createReducer(
  initialSatiate,
  on(
    registerAction,
    (state): AuthStateInterface => ({...state, isSubmitting: true})
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
