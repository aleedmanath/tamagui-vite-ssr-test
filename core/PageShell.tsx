export { PageShell }

import React from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'

import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'

function PageShell({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
  return (
    <React.StrictMode>
       <TamaguiProvider config={config}>
        <PageContextProvider pageContext={pageContext}>
          <Layout>
            <Content>{children}</Content>
          </Layout>
        </PageContextProvider>
       </TamaguiProvider>
    </React.StrictMode>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: 20,
          paddingBottom: 50,
          minHeight: '100vh'
        }}
      >
        {children}
      </div>
    </div>
  )
}
