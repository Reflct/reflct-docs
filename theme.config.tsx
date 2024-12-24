import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  chat: {
    link: "https://discord.gg/rfYNxSw3yx",
  },
  docsRepositoryBase: "https://github.com/reflct/reflct-docs",
  footer: {
    content: "Reflct docs",
  },
  color: {
    hue: 217,
    saturation: 91,
    lightness: 60,
  },
  backgroundColor: {
    dark: "17, 18, 20, 1",
    light: "255, 255, 255, 1",
  },
};

export default config;
