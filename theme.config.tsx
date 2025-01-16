import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Head from 'next/head'

const config: DocsThemeConfig = {
  logo: () => {
    const { resolvedTheme } = useTheme()
    return (
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Image 
          src={resolvedTheme === 'dark' ? '/reflct-logo-white.svg' : '/reflct-logo.svg'} 
          alt="Reflct Logo" 
          width={150} 
          height={150} 
          style={{ height: '32px', width: 'auto' }}
          priority
        />
      </span>
    )
  },
  head: () => {
    return (
      <>
        <title>Reflct Docs & Guides</title>
        <meta name="description" content="Learn how to use Reflct - Web 3D Gaussian Splatting made easy." />
        <meta property="og:title" content="Reflct Docs & Guides" />
        <meta property="og:description" content="Learn how to use Reflct - Web 3D Gaussian Splatting made easy." />
        <meta property="og:image" content="https://docs.reflct.app/reflct-og.jpg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" type="image/png" href="/favicon.png" />
      </>
    )
  },
  chat: {
    link: 'https://discord.gg/rfYNxSw3yx',
  },
  docsRepositoryBase: 'https://github.com/Reflct/reflct-docs/blob/main',
  footer: {
    content: 'Reflct docs',
  },
}

export default config
