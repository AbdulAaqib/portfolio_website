import { Project } from "../typings";
import { getBaseUrl } from '../utils/getBaseUrl';

export const fetchProjects = async () => {
    const res = await fetch(`${getBaseUrl()}/api/getProjects`);

    const data = await res.json();
    const projects: Project[] = data.projects;

    //console.log("fetching", projects)

    return projects;
}