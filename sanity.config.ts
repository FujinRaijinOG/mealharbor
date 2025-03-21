// filepath: c:\Users\Lenovo\mealharbor\sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
  dataset: "production",
  apiVersion: "2023-06-18",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
