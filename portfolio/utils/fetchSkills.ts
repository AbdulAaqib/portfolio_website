// utils/fetchSkills.ts
import { Skill } from "../typings";
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-04-19",
  useCdn: false,
});

export const fetchSkills = async (): Promise<Skill[]> => {
  const query = `*[_type == "skill"] | order(_createdAt asc)`;
  const skills: Skill[] = await client.fetch(query);
  return skills;
};
