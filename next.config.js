/** @type {import('next').Config} */
module.exports = async () => {
  const { default: nextra } = await import('nextra')
  const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx'
  })
  return withNextra({
    // Your Next.js config options here
  })
}
