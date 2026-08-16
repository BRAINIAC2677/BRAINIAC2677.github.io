export interface ProfileLink {
    href: string;
    label: string;
}

export interface AcademicProfile {
    affiliation: string;
    biography: RichTextPart[][];
    cvUrl: string;
    email: string;
    links: ProfileLink[];
    name: string;
    researchInterests: string[];
    researchStatement: string;
    role: string;
    scholarUrl: string;
    status: string;
}

export interface AcademicUpdate {
    category: string;
    content: RichTextPart[];
    date: string;
}

export interface ResearchLink {
    href: string;
    label: string;
}

export interface ResearchAuthor {
    href?: string;
    isProfileOwner: boolean;
    name: string;
}

export interface ResearchVenue {
    href: string;
    name: string;
}

export interface ResearchWork {
    authors: ResearchAuthor[];
    description: RichTextPart[];
    links: ResearchLink[];
    publicationDate: string;
    status: string;
    title: string;
    venue: ResearchVenue;
}

export interface RichTextPart {
    href?: string;
    isEmphasized?: boolean;
    text: string;
}

export interface AcademicExperience {
    description: RichTextPart[][];
    institution: string;
    institutionUrl?: string;
    location: string;
    period: string;
    role: string;
}

export interface AcademicLeadership {
    description: RichTextPart[];
    organization: string;
    organizationUrl?: string;
    period: string;
    title: string;
}

export interface Education {
    degree: string;
    details: string[];
    institution: string;
    period: string;
}

export interface Honor {
    detail: string;
    href?: string;
    title: string;
    year: string;
}
