"use client";
import { SessionProvider } from 'next-auth/react'
import React, { PropsWithChildren } from 'react'

const ProviderWrapper = ({children}: PropsWithChildren) => {
  return (
    <SessionProvider>
        {children}

    </SessionProvider>
  )
}

export default ProviderWrapper