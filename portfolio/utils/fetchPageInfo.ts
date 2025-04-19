// utils/fetchPageInfo.ts
import { PageInfo } from "../typings";
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-04-19",
  useCdn: false,
});

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const query = `*[_type == "pageInfo"][0]`;
  const pageInfo: PageInfo = await client.fetch(query);
  return pageInfo;
};
