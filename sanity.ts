import { createClient } from "next-sanity";
import createImageBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

// Set up client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageBuilder(config).image(source);
