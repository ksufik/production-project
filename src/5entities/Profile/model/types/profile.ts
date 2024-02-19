import { type Country, type Currency } from '6shared/const/common'

export interface Profile {
  first: string
  lastname: string
  age: number
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  profile?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
