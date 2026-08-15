import type { AcademicExperience, AcademicProfile, AcademicUpdate, Education, Honor, ResearchAuthor, ResearchWork } from "$lib/interfaces/academic";

export const academicProfile: AcademicProfile = {
    affiliation: "AI Innovation Team · Ministry of Defence, Saudi Arabia",
    biography: [
        [
            { text: "I am an AI Research Engineer at the " },
            {
                href: "https://ai.modhs.med.sa/en",
                text: "AI Innovation Hub, Ministry of Defence Health Services",
            },
            {
                text: ", Saudi Arabia, where, under the research supervision of ",
            },
            { href: "https://hoques.com/", text: "Professor Ehsan Hoque" },
            {
                text: ", I develop AI-enabled healthcare systems spanning autism screening, clinical assessment, and intervention in collaboration with major medical cities and hospitals across the country. This work includes a research partnership with the ",
            },
            { href: "https://www.media.mit.edu/", text: "MIT Media Lab" },
            {
                text: ". More broadly, my work explores responsible and trustworthy AI for high-stakes domains, especially healthcare, through multimodal reasoning and agentic systems. I also collaborated with ",
            },
            { href: "https://rizwan09.github.io/", text: "Dr. Md Rizwan Parvez" },
            { text: " at " },
            { href: "https://www.hbku.edu.qa/en/qcri/about", text: "QCRI" },
            {
                text: " on the reliability of state-of-the-art vision-language models; our work was published at ",
            },
            {
                href: "https://aclanthology.org/2026.findings-eacl.274/",
                text: "Findings of EACL 2026",
            },
            { text: "." },
        ],
        [
            { text: "I earned my BSc in Computer Science & Engineering from " },
            { href: "https://www.buet.ac.bd/", text: "BUET" },
            {
                text: " in March 2025. My undergraduate thesis on reliable diagnostic machine learning was supervised by ",
            },
            {
                href: "https://cse.buet.ac.bd/faculty/faculty_detail/mrahman",
                text: "Professor M Saifur Rahman",
            },
            { text: ", with mentorship from " },
            {
                href: "https://www.linkedin.com/in/saifulislam-cse-buet/",
                text: "Md Saiful Islam",
            },
            { text: ", a Machine Learning Software Engineer at " },
            { href: "https://health.google/", text: "Google" },
            {
                text: ". The resulting paper, ",
            },
            {
                href: "https://link.springer.com/chapter/10.1007/978-3-032-00652-3_3",
                text: "Beyond Accuracy",
            },
            {
                text: ", was nominated for the AIiH 2025 Best Paper Award. I was also named to the Dean's List for three consecutive years and received the ",
            },
            {
                href: "https://www.computer.org/volunteering/awards/scholarships/merwin",
                text: "IEEE Richard E. Merwin Student Scholarship",
            },
            { text: " as its sole Fall 2023 recipient from Bangladesh." },
        ],
    ],
    cvUrl: "/Asif-Azad_Academic-Resume.pdf",
    email: "asifazad0178@gmail.com",
    links: [
        { href: "https://github.com/BRAINIAC2677", label: "GitHub" },
        { href: "https://www.linkedin.com/in/asifazad2677", label: "LinkedIn" },
    ],
    name: "Asif Azad",
    role: "AI Research Engineer",
    scholarUrl: "https://scholar.google.com/citations?user=nDhZSTQAAAAJ",
    status: "Open to Fall 2027 PhD opportunities",
};

export const academicUpdates: AcademicUpdate[] = [
    {
        category: "Upcoming",
        content: [
            { text: "Joining " },
            { href: "https://www.bracu.ac.bd/", text: "BRAC University" },
            { text: " as a Lecturer." },
        ],
        date: "Oct 2026",
    },
    {
        category: "Acceptance",
        content: [
            { href: "https://arxiv.org/abs/2604.06191", text: "Harf-Speech" },
            { text: " accepted at Interspeech 2026." },
        ],
        date: "Jun 2026",
    },
    {
        category: "Publication",
        content: [
            { text: "Published our " },
            {
                href: "https://aclanthology.org/2026.findings-eacl.274/",
                text: "work on conformal uncertainty quantification for VLMs",
            },
            { text: " at Findings of EACL 2026." },
        ],
        date: "Mar 2026",
    },
    {
        category: "Teaching role",
        content: [
            { text: "Joined " },
            { href: "https://cse.buet.ac.bd/", text: "BUET’s Department of CSE" },
            { text: " as an Adjunct Lecturer." },
        ],
        date: "Nov 2025",
    },
    {
        category: "Academic service",
        content: [
            { text: "Reviewed manuscripts for the October cycle of " },
            { href: "https://aclrollingreview.org/", text: "ACL Rolling Review" },
            { text: " (ARR)." },
        ],
        date: "Oct 2025",
    },
    {
        category: "Award",
        content: [
            { text: "My undergraduate thesis paper, " },
            {
                href: "https://link.springer.com/chapter/10.1007/978-3-032-00652-3_3",
                text: "Beyond Accuracy",
            },
            { text: ", was nominated for the AIiH 2025 Best Paper Award." },
        ],
        date: "Sep 2025",
    },
    {
        category: "Invited talk",
        content: [
            { text: "Presented “AI in Medicine: Transforming Healthcare Today & Tomorrow” at the " },
            {
                href: "https://osb.org.bd/",
                text: "52nd Annual National Conference of the Ophthalmological Society of Bangladesh",
            },
            { text: "." },
        ],
        date: "14 May 2025",
    },
    {
        category: "Research role",
        content: [
            { text: "Joined the " },
            {
                href: "https://ai.modhs.med.sa/en",
                text: "Ministry of Defence AI Innovation Hub",
            },
            { text: " as an AI Research Engineer." },
        ],
        date: "Apr 2025",
    },
    {
        category: "Sports",
        content: [
            { text: "Captained my " },
            { href: "https://www.buet.ac.bd/", text: "BUET" },
            { text: " hall basketball team to the championship and finished as the top scorer." },
        ],
        date: "2024",
    },
];

const researchAuthorUrls: Record<string, string> = {
    "Abdulrhman Aljouie": "https://saudi-medical-ai-lab.github.io/website/members/aljouie.html",
    "Asif Azad": academicProfile.scholarUrl,
    "Bdour Alwuqaysi": "https://www.linkedin.com/in/bdour-alwuqaysi-69615210a/",
    "Ehsan Hoque": "https://hoques.com/",
    "M Saifur Rahman": "https://cse.buet.ac.bd/faculty/faculty_detail/mrahman",
    "M. Saifur Rahman": "https://cse.buet.ac.bd/faculty/faculty_detail/mrahman",
    "MD Sadik Hossain Shanto": "https://bd.linkedin.com/in/md-sadik-hossain-shanto",
    "Md Rizwan Parvez": "https://rizwan09.github.io/",
    "Md Saiful Islam": "https://saiful1105020.github.io/",
    "Md Zarif Ul Alam": "https://zarif98sjs.github.io/",
    "Md. Saiful Islam": "https://saiful1105020.github.io/",
    "Mohammad Sadat Hossain": "https://cse.buet.ac.bd/faculty/faculty_detail/sadat",
    "Ruth B. Schneider": "https://www.urmc.rochester.edu/people/112360104-ruth-b-schneider",
    "Sabri Boughorbel": "https://www.linkedin.com/in/sabriboughorbel/",
    "Tariq Adnan": "https://tmadnan.github.io/",
    "Yahya Bokhari": "https://cemse.kaust.edu.sa/profiles/yahya-bokhari",
};

function createResearchAuthors(names: string[]): ResearchAuthor[] {
    return names.map((name) => ({
        href: researchAuthorUrls[name],
        isProfileOwner: name === academicProfile.name,
        name,
    }));
}

export const selectedResearch: ResearchWork[] = [
    {
        authors: createResearchAuthors([
            "Asif Azad",
            "MD Sadik Hossain Shanto",
            "Mohammad Sadat Hossain",
            "Bdour Alwuqaysi",
            "Sabri Boughorbel",
            "Yahya Bokhari",
            "Abdulrhman Aljouie",
            "Ayah Othman Sindi",
            "Ehsan Hoque",
        ]),
        description:
            "A clinically validated, phoneme-level Arabic speech assessment framework that aligns automated pronunciation scores with expert speech-language pathologist ratings.",
        links: [{ href: "https://arxiv.org/abs/2604.06191", label: "arXiv" }],
        publicationDate: "September 2026",
        status: "Accepted · Proceedings forthcoming",
        title: "Harf-Speech: A Clinically Aligned Framework for Arabic Phoneme-Level Speech Assessment",
        venue: {
            href: "https://www.isca-speech.org/event-5462701",
            name: "Interspeech 2026",
        },
    },
    {
        authors: createResearchAuthors([
            "Asif Azad",
            "Mohammad Sadat Hossain",
            "MD Sadik Hossain Shanto",
            "Sabri Boughorbel",
            "Abdulrhman Aljouie",
            "Bdour Alwuqaysi",
            "Yahya Bokhari",
            "Ayah Othman Sindi",
            "Ehsan Hoque",
        ]),
        description:
            "A culturally grounded, multimodal AI platform that extends clinician-led Arabic speech and language therapy into the home for children with autism.",
        links: [{ href: "https://arxiv.org/abs/2607.27212", label: "Manuscript" }],
        publicationDate: "May 2026",
        status: "Preprint",
        title: "Digital Harf: A Clinically Integrated Multimodal AI System for Pervasive Arabic Speech and Language Therapy",
        venue: {
            href: "https://arxiv.org/abs/2607.27212",
            name: "Preprint",
        },
    },
    {
        authors: createResearchAuthors([
            "Md Saiful Islam",
            "Tariq Adnan",
            "Abdelrahman Abdelkader",
            "Zipei Liu",
            "Evelyn Ma",
            "Sooyong Park",
            "Asif Azad",
            "Pai Liu",
            "Meghan Pawlik",
            "Emily Hartman",
            "Erin Shelton",
            "Kristina B. Larson",
            "M. Saifur Rahman",
            "Cathe Schwartz",
            "Karen Jaffe",
            "Jamie L. Adams",
            "Ruth B. Schneider",
            "Jan Freyberg",
            "E. Ray Dorsey",
            "Ehsan Hoque",
        ]),
        description:
            "A cross-setting validation of PARK, a remote multimodal screening tool evaluated on 1,865 participants across supervised clinical and unsupervised home environments.",
        links: [
            {
                href: "https://www.nature.com/articles/s43856-026-01606-6",
                label: "Paper",
            },
        ],
        publicationDate: "May 2026",
        status: "Published · Open access",
        title: "Validation of Remote Multimodal AI Screening for Parkinson Disease Across Diverse Settings",
        venue: {
            href: "https://www.nature.com/articles/s43856-026-01606-6",
            name: "Communications Medicine",
        },
    },
    {
        authors: createResearchAuthors([
            "Md Zarif Ul Alam",
            "Asif Azad",
            "Md Saiful Islam",
            "Ehsan Hoque",
            "M Saifur Rahman",
        ]),
        description:
            "A graph-based positive-unlabeled learning framework for Parkinson’s recognition from webcam-recorded finger-tapping videos.",
        links: [
            {
                href: "https://dl.acm.org/doi/10.1145/3799417",
                label: "Paper",
            },
        ],
        publicationDate: "April 2026",
        status: "Published",
        title: "PULSAR: Graph-Based Positive Unlabeled Learning with Multi-Stream Adaptive Convolutions for Parkinson’s Disease Recognition",
        venue: {
            href: "https://dl.acm.org/doi/10.1145/3799417",
            name: "ACM Transactions on Computing for Healthcare",
        },
    },
    {
        authors: createResearchAuthors([
            "Asif Azad",
            "Mohammad Sadat Hossain",
            "MD Sadik Hossain Shanto",
            "M Saifur Rahman",
            "Md Rizwan Parvez",
        ]),
        description:
            "A systematic conformal uncertainty study of 18 open- and closed-source vision-language models across six multimodal datasets and three scoring functions.",
        links: [
            {
                href: "https://aclanthology.org/2026.findings-eacl.274/",
                label: "Paper",
            },
            {
                href: "https://aclanthology.org/2026.findings-eacl.274.pdf",
                label: "PDF",
            },
        ],
        publicationDate: "March 2026",
        status: "Published · Peer reviewed",
        title: "The Art of Saying ‘Maybe’: A Conformal Lens for Uncertainty Benchmarking in VLMs",
        venue: {
            href: "https://aclanthology.org/2026.findings-eacl.274/",
            name: "Findings of EACL 2026",
        },
    },
    {
        authors: createResearchAuthors([
            "Asif Azad",
            "Md. Saiful Islam",
            "Ehsan Hoque",
            "M. Saifur Rahman",
        ]),
        description:
            "An evaluation of Monte Carlo Dropout, Deep Evidential Classification, and Bayesian Neural Networks for reliable Parkinson’s diagnosis across motor, facial, and speech datasets.",
        links: [
            {
                href: "https://link.springer.com/chapter/10.1007/978-3-032-00652-3_3",
                label: "Paper",
            },
            { href: "https://github.com/BRAINIAC2677/UQ4PD-ML", label: "Code" },
        ],
        publicationDate: "August 2025",
        status: "Published · Best Paper Award nominee",
        title: "Beyond Accuracy: Enhancing Parkinson’s Diagnosis with Uncertainty Quantification of Machine Learning Models",
        venue: {
            href: "https://link.springer.com/chapter/10.1007/978-3-032-00652-3_3",
            name: "AIiH 2025 · Springer LNCS",
        },
    },
];

export const academicExperience: AcademicExperience[] = [
    {
        description: [
            {
                text: "Developing AI-enabled healthcare systems spanning autism screening, clinical assessment, and intervention under ",
            },
            { href: "https://hoques.com/", text: "Professor Ehsan Hoque" },
            {
                text: ", in collaboration with major medical cities and hospitals across Saudi Arabia.",
            },
        ],
        institution: "AI Innovation Hub, Ministry of Defence Health Services",
        institutionUrl: "https://ai.modhs.med.sa/en",
        location: "Saudi Arabia",
        period: "Apr 2025 — Present",
        role: "AI Research Engineer",
    },
    {
        description: [
            {
                text: "Designed and taught labs, assessments, and sessional materials for Data Structures and Algorithms, Database Systems, and Digital Logic Design while mentoring students through direct academic guidance.",
            },
        ],
        institution: "Department of Computer Science and Engineering, Bangladesh University of Engineering and Technology",
        institutionUrl: "https://www.buet.ac.bd/",
        location: "Dhaka, Bangladesh",
        period: "Nov 2025 — May 2026",
        role: "Adjunct Lecturer",
    },
];

export const education: Education[] = [
    {
        degree: "B.Sc. in Computer Science and Engineering",
        details: ["CGPA 3.91 / 4.00", "Three Dean’s List awards"],
        institution: "Bangladesh University of Engineering and Technology",
        period: "2020 — 2025",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        details: ["GPA 5.00 / 5.00", "5th in Jessore Board · Talent-pool scholarship"],
        institution: "Jhenaidah Cadet College",
        period: "2019",
    },
];

export const selectedHonors: Honor[] = [
    {
        detail: "Beyond Accuracy · AI in Healthcare Conference",
        title: "Best Paper Award Nomination",
        year: "2025",
    },
    {
        detail: "Sole Fall 2023 recipient from Bangladesh",
        title: "Richard E. Merwin Student Scholarship",
        year: "2023",
    },
    {
        detail: "Bangladesh University of Engineering and Technology",
        title: "Dean’s List Student Award · three consecutive years",
        year: "2022–24",
    },
    {
        detail: "Document layout analysis competition",
        title: "Champion, Deep Learning Sprint 2.0",
        year: "2023",
    },
    {
        detail: "Bengali text-to-IPA challenge",
        title: "Champion, DataVerse Challenge",
        year: "2023",
    },
    {
        detail: "1st in Bangladesh",
        title: "IEEE Xtreme 16.0",
        year: "2022",
    },
];
