declare module "*.json";
declare module "*.png";
declare module "*.jpg";

declare module "*.svg" {
  const content: unknown;
  export default content;
}
