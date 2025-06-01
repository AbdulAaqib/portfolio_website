// utils/fetchProjects.ts
import { Project } from "../typings";
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-04-19",
  useCdn: false,
});

export const fetchProjects = async (): Promise<Project[]> => {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    ...,
    technologies[]->
  }`;
  
  try {
    const projects: Project[] = await client.fetch(query);
    console.log('Fetched projects from Sanity:', JSON.stringify(projects, null, 2));
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};
