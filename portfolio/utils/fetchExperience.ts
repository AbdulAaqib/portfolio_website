// utils/fetchExperiences.ts
import { Experience } from "../typings";
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-04-19",
  useCdn: false,
});

export const fetchExperiences = async (): Promise<Experience[]> => {
  const query = `*[_type == "experience"] | order(dateStarted desc) {
    ...,
    technologies[]->
  }`;
  const experiences: Experience[] = await client.fetch(query);
  return experiences;
};
