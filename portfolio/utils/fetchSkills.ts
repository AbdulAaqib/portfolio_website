import { Skill } from "../typings";
import { getBaseUrl } from '../utils/getBaseUrl';

export const fetchSkills = async () => {
    const res = await fetch(`${getBaseUrl()}/api/getSkills`);

    const data = await res.json();
    const skills: Skill[] = data.skills;

    //console.log("fetching", skills)

    return skills;
}