import { Social } from "../typings";
import { getBaseUrl } from '../utils/getBaseUrl';

export const fetchSocial = async () => {
    const res = await fetch(`${getBaseUrl()}/api/getSocials`);

    const data = await res.json();
    const socials: Social[] = data.socials;

    //console.log("fetching", socials)

    return socials;
}