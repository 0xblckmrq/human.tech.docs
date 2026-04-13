import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import type { Metadata } from 'next'

const logo = (
  <>
    <img
      src="/images/human-tech-logo.svg"
      alt="human.tech"
      height={28}
      style={{ height: 28, width: 'auto' }}
      className="dark:hidden"
    />
    <img
      src="/images/human-tech-logo-dark.svg"
      alt="human.tech"
      height={28}
      style={{ height: 28, width: 'auto' }}
      className="hidden dark:block"
    />
  </>
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
          feedback={{ content: null }}
          editLink={null}
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
