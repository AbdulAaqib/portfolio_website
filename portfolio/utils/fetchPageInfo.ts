import { PageInfo } from "../typings";
import { getBaseUrl } from '../utils/getBaseUrl';

export const fetchPageInfo = async () => {
    const res = await fetch(`${getBaseUrl()}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    //console.log("fetching", pageInfo)

    return pageInfo;
}