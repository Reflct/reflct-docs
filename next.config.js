/** @type {import('next').Config} */
module.exports = async () => {
  const { default: nextra } = await import("nextra");
  const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
  });
  return withNextra({
    // Your Next.js config options here
    images: {
      unoptimized: true,
    },
    
    // Add metadata configuration
    metadata: {
      title: 'Reflct Docs & Guides',
      description: 'Learn how to use Reflct - Web 3D Gaussian Splatting made easy.',
      openGraph: {
        title: 'Reflct Docs & Guides',
        description: 'Learn how to use Reflct - Web 3D Gaussian Splatting made easy.',
        images: [
          {
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: 'Reflct Docs & Guides',
          },
        ],
      },
      icons: {
        icon: '/favicon.png',
      },
    },
    
    webpack(config) {
      // Grab the existing rule that handles SVG imports
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.(".svg")
      );

      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
          use: ["@svgr/webpack"],
        }
      );

      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i;

      return config;
    },
  });
};
