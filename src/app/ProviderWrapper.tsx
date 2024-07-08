"use client"
import { SessionProvider } from "next-auth/react"
import {store} from "../redux/store"
import React from 'react'
import {Provider} from 'react-redux'
export const ProviderWrapper = ({children}:{children:React.ReactNode }) => {
    return <Provider store={store}><SessionProvider>{children}</SessionProvider></Provider>
  
  
}
