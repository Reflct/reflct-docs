import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const config: DocsThemeConfig = {
  logo: () => {
    const { theme } = useTheme()
    return (
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Image 
          src={theme === 'dark' ? '/reflct-logo-white.svg' : '/reflct-logo.svg'} 
          alt="Reflct Logo" 
          width={150} 
          height={150} 
          style={{ height: '40px', width: 'auto' }}
          priority
        />
      </span>
    )
  },
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.gg/rfYNxSw3yx',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    content: 'Reflct docs',
  },
}

export default config
