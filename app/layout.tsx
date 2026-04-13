import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import type { Metadata } from 'next'

const logo = (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    {/* Light mode logo (hidden in dark) */}
    <img
      src="/images/human-tech-logo.svg"
      alt="human.tech"
      height={28}
      style={{ height: 28, width: 'auto' }}
      className="dark:hidden"
    />
    {/* Dark mode logo (hidden in light) */}
    <img
      src="/images/human-tech-logo-dark.svg"
      alt="human.tech"
      height={28}
      style={{ height: 28, width: 'auto' }}
      className="hidden dark:block"
    />
    <span style={{
      fontFamily: "'Suisse Intl', sans-serif",
      fontWeight: 500,
      fontSize: 14,
      opacity: 0.6,
      paddingLeft: 4,
    }}>
      docs
    </span>
  </div>
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
