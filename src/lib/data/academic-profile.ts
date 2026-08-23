import type { AcademicExperience, AcademicLeadership, AcademicProfile, AcademicUpdate, Education, Honor, ResearchAuthor, ResearchWork } from "$lib/interfaces/academic";

export const academicProfile: AcademicProfile = {
    affiliation: "AI Innovation Hub · Ministry of Defence Health Services",
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
                text: ", I work on multimodal AI systems for healthcare in collaboration with major medical cities and hospitals across the country. I have also collaborated with ",
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
            {
                text: "More broadly, I am interested in building reliable and responsible multimodal intelligent systems that can reason, interact, collaborate with people, and operate safely in consequential real-world environments, particularly high-stakes domains such as healthcare. I earned my BSc in Computer Science & Engineering from ",
            },
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
            {
                text: " at Google. The resulting paper, ",
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
    researchInterests: [
        "Trustworthy Multimodal & Agentic AI",
        "Human-Centered AI",
        "AI for Healthcare & High-Stakes Domains",
    ],
    researchStatement:
        "I am interested in building reliable and responsible multimodal intelligent systems that can reason, interact, collaborate with people, and operate safely in consequential real-world environments, particularly high-stakes domains such as healthcare.",
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
        category: "Reviewer",
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
        description: [
            { text: "Developed a modular, " },
            { isEmphasized: true, text: "clinically aligned Arabic pronunciation-assessment framework" },
            { text: " combining speech-to-phoneme modeling with interpretable alignment-based scoring. It achieved an " },
            { isEmphasized: true, text: "8.92% phoneme error rate" },
            { text: " and " },
            { isEmphasized: true, text: "strong agreement with speech-language pathologists (r = 0.791)" },
            { text: ", enabling scalable assessment for an underserved language." },
        ],
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
        description: [
            { text: "Built a " },
            { isEmphasized: true, text: "clinically integrated multimodal AI platform" },
            { text: " for home-based Arabic speech and language assessment and intervention. Its " },
            { isEmphasized: true, text: "agentic synthetic-data engine" },
            { text: " generated culturally grounded therapeutic content with " },
            { isEmphasized: true, text: "90.1% clinician acceptance" },
            { text: "; the platform is being evaluated in an " },
            { isEmphasized: true, text: "ongoing randomized clinical trial" },
            { text: "." },
        ],
        links: [
            { href: "https://arxiv.org/abs/2607.27212", label: "Paper" },
            { href: "https://digitalharf.modhs.med.sa/", label: "Project" },
        ],
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
        description: [
            { text: "Validated " },
            { isEmphasized: true, text: "PARK, an uncertainty-aware multimodal screening system" },
            { text: " that fuses facial, motor, and speech tasks across " },
            { isEmphasized: true, text: "1,865 participants in supervised and at-home settings" },
            { text: ". It achieved " },
            { isEmphasized: true, text: "0.85–0.87 AUROC" },
            { text: " while maintaining performance across diverse cohorts, supporting accessible remote Parkinson’s screening." },
        ],
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
        description: [
            { text: "Co-developed " },
            { isEmphasized: true, text: "PULSAR, a positive-unlabeled multi-stream graph-convolutional framework" },
            { text: " for Parkinson’s screening from webcam finger-tapping videos. By modeling noisy self-reported labels and joint, bone, velocity, and acceleration streams, it achieved " },
            { isEmphasized: true, text: "71.3% mean accuracy on an independent test set" },
            { text: " despite limited reliable labels." },
        ],
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
        description: [
            { text: "Established a " },
            { isEmphasized: true, text: "comprehensive conformal uncertainty benchmark" },
            { text: " of " },
            { isEmphasized: true, text: "18 open- and closed-source VLMs across six multimodal datasets and three scoring functions" },
            { text: ", including likelihood proxies for API-only models. The study shows that stronger models generally quantify uncertainty better, while uncertainty estimation remains " },
            { isEmphasized: true, text: "particularly challenging on mathematical and reasoning-intensive tasks" },
            { text: "." },
        ],
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
        description: [
            { text: "Evaluated " },
            { isEmphasized: true, text: "Monte Carlo Dropout (MCD), Deep Evidential Classification (DEC), and Bayesian Neural Networks (BNNs)" },
            { text: " across motor, facial, and speech datasets for Parkinson’s diagnosis. The study found " },
            { isEmphasized: true, text: "MCD and BNNs more reliable than DEC" },
            { text: " and showed how uncertainty estimates can " },
            { isEmphasized: true, text: "flag ambiguous predictions" },
            { text: " to support safer clinical decision-making." },
        ],
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
            [
                { isEmphasized: true, text: "Co-develop " },
                { href: "https://digitalharf.modhs.med.sa/", text: "Digital Harf" },
                {
                    text: ", a multimodal AI platform for Arabic speech and language assessment and intervention, with clinical teams across MODHS medical centers.",
                },
            ],
            [
                { isEmphasized: true, text: "Co-designed the platform’s randomized clinical trial" },
                {
                    text: ", including the study protocol, IRB and SFDA approvals, and therapist training; coordinate the ",
                },
                { isEmphasized: true, text: "ongoing clinical evaluation" },
                { text: "." },
            ],
            [
                { isEmphasized: true, text: "Conduct research from Digital Harf" },
                { text: ", including " },
                { href: "https://arxiv.org/abs/2604.06191", text: "Harf-Speech" },
                {
                    text: " (Interspeech 2026), which develops and evaluates an ",
                },
                { isEmphasized: true, text: "Arabic phoneme-level pronunciation assessment method" },
                { text: " against speech-language pathologists’ ratings." },
            ],
        ],
        institution: "AI Innovation Hub, Ministry of Defence Health Services",
        institutionUrl: "https://ai.modhs.med.sa/en",
        location: "Saudi Arabia",
        period: "Apr 2025 — Present",
        role: "AI Research Engineer",
    },
    {
        description: [
            [
                { isEmphasized: true, text: "Taught Data Structures & Algorithms, Database Systems, and Digital Logic Design" },
                {
                    text: "; designed labs and sessional materials connecting theory with practice.",
                },
            ],
            [
                { isEmphasized: true, text: "Designed assessments" },
                { text: " and provided " },
                { isEmphasized: true, text: "academic guidance and mentorship" },
                { text: " to students." },
            ],
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
        details: ["CGPA 3.91 / 4.00", "Top 10%", "Dean’s List · three consecutive years"],
        institution: "Bangladesh University of Engineering and Technology (BUET)",
        period: "Feb 2020 — Mar 2025",
    },
];

export const selectedHonors: Honor[] = [
    {
        detail: "Beyond Accuracy · AI in Healthcare Conference",
        href: "https://link.springer.com/chapter/10.1007/978-3-032-00652-3_3",
        title: "Best Paper Award Nomination",
        year: "2025",
    },
    {
        detail: "October cycle · ACL Rolling Review",
        href: "https://aclrollingreview.org/",
        title: "Reviewer",
        year: "2025",
    },
    {
        detail: "AI in Medicine · 52nd Annual National Conference of the Ophthalmological Society of Bangladesh",
        href: "https://osb.org.bd/",
        title: "Invited Talk",
        year: "2025",
    },
    {
        detail: "Sole Fall 2023 recipient from Bangladesh",
        href: "https://www.computer.org/volunteering/awards/scholarships/merwin",
        title: "Richard E. Merwin Student Scholarship",
        year: "2023",
    },
    {
        detail: "Bangladesh University of Engineering and Technology",
        href: "https://www.buet.ac.bd/",
        title: "Dean’s List Student Award · three consecutive years",
        year: "2022–24",
    },
];

export const academicLeadership: AcademicLeadership[] = [
    {
        description: [
            { isEmphasized: true, text: "Led end-to-end coordination" },
            { text: " for the multi-month department festival, securing " },
            { isEmphasized: true, text: "sponsorships" },
            { text: " and aligning faculty and student teams to deliver inter-university technical competitions and cultural programs." },
        ],
        organization: "BUET CSE Festival 2024",
        organizationUrl: "https://cse.buet.ac.bd/home/news_detail/200",
        period: "2024",
        title: "Lead Student Coordinator",
    },
    {
        description: [
            { isEmphasized: true, text: "Captained both teams" },
            { text: "; led the hall team to the " },
            { isEmphasized: true, text: "2024 Inter-Hall basketball championship" },
            { text: " as the " },
            { isEmphasized: true, text: "tournament’s top scorer" },
            { text: "." },
        ],
        organization: "BUET University and Hall Teams",
        period: "2024",
        title: "Basketball Team Captain",
    },
];
