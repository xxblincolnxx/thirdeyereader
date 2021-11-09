import { createContext } from 'react'

interface loginContextSchema {
  username: string
  setUsername(arg: string): string | void
  authed: boolean
  setAuthed(arg: boolean): boolean | void
}

export const LoginContext = createContext({} as loginContextSchema)
