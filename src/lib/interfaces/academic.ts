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
    affiliationIndices?: number[];
    hasEqualContribution?: boolean;
    href?: string;
    isProfileOwner: boolean;
    name: string;
}

export interface ResearchVenue {
    href: string;
    name: string;
}

export interface ResearchSignal {
    label: string;
    title: string;
}

export interface ResearchFigure {
    alt: string;
    caption: string;
    src: string;
}

export interface ResearchWork {
    abstract: string[];
    affiliations: string[];
    authors: ResearchAuthor[];
    authorship?: "Co-first author" | "First author";
    citation: string;
    description: RichTextPart[];
    distinction?: string;
    figure?: ResearchFigure;
    links: ResearchLink[];
    publicationDate: string;
    slug: string;
    status?: string;
    title: string;
    venue: ResearchVenue;
    venueSignals?: ResearchSignal[];
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
