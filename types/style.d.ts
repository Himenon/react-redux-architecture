declare module "*.scss" {
  export const classes: { readonly [key: string]: string };
  export = classes;
}
