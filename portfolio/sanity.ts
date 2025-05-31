import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'xshaaenw',
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
};

// Create the client with the configuration
export const sanityClient = createClient(config);

// Helper function for generating image URLs
export const urlFor = (source: any) => {
    if (!source) return '';
    
    const imageBuilder = createImageUrlBuilder(config);
    try {
        return imageBuilder.image(source).url() || '';
    } catch (error) {
        console.error('Error generating Sanity image URL:', error);
        return '';
    }
};