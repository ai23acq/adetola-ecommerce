'use client'
import React from 'react'
import {Provider} from "react-redux"
import {SessionProvider} from "next-auth/react"
import { persistor, store } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </PersistGate>
    </Provider>
  )
}

export default Layout