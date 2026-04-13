import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import type { Metadata } from 'next'

const logo = (
  <img
    src="/images/logo.png"
    alt="human.tech logo"
    width={140}
    height={40}
    style={{ objectFit: 'contain' }}
  />
)

export const metadata: Metadata = {
  title: {
    default: 'human.tech docs',
    template: '%s – human.tech'
  },
  description: 'Infrastructure for digital identity, privacy, and access built by Holonym.',
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={logo}
              projectLink="https://github.com/0xblckmrq/human.tech.docs"
            />
          }
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/0xblckmrq/human.tech.docs/tree/main"
          sidebar={{
            defaultMenuCollapseLevel: 2
          }}
          footer={<Footer>© 2026 human.tech. All rights reserved.</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
