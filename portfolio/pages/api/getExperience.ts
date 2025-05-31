import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import type { Experience } from "../../typings";

const query = groq`
    *[_type == "experience"] {
      ...,
      technologies[]->
    }`;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Experience[]> 
  ) {
    const experiences: Experience[] = await sanityClient.fetch(query);

    res.status(200).json(experiences)
  }