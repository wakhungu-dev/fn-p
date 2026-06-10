"use client"
import { ClerkProvider } from "@clerk/nextjs"
import { store } from "../redux/store"
import React from 'react'
import { Provider } from 'react-redux'

export const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ClerkProvider>
        {children}
      </ClerkProvider>
    </Provider>
  )
}
