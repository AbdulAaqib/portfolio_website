import { StringRule } from "sanity";

interface SanityBody {
    createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "type";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Experience extends SanityBody {
    sort(arg0: (a: any, b: any) => number): unknown;
    map(arg0: (experience: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody {
    id: Key ;
    order: number;
    isWide: any;
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
    width: number;
    height: number;
    projectGithubLink: string;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}