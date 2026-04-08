import Image from 'next/image'

export default {
  logo: (
    <Image
      src="/images/logo.png"
      alt="human.tech logo"
      width={140}
      height={40}
      style={{ objectFit: 'contain' }}
    />
  ),
  footer: {
    text: '© 2026 human.tech. All rights reserved.',
  },
  search: {
    placeholder: 'Search human.tech docs...',
  },
  docsRepositoryBase: 'https://github.com/0xblckmrq/human.tech.docs/tree/main',
}
