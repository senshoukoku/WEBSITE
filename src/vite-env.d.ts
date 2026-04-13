/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly service_w08gk5t: string;
  readonly template_xu4jx41: string;
  readonly NQJsmC0nLbWXtRdB0: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

