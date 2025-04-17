import { Experience } from "../typings";
import { getBaseUrl } from '../utils/getBaseUrl';

export const fetchExperiences = async () => {
    const res = await fetch(`${getBaseUrl()}/api/getExperience`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    //console.log("fetching", experiences)

    return experiences;
}