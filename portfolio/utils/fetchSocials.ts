// utils/fetchSocials.ts
import { Social } from "../typings";
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-04-19",
  useCdn: false,
});

export const fetchSocials = async (): Promise<Social[]> => {
  const query = `*[_type == "social"]`;
  const socials: Social[] = await client.fetch(query);
  return socials;
};
