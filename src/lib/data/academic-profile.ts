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
        { href: "https://www.linkedin.com/in/asifazad2677", label: "LinkedIn" },
        { href: "https://github.com/BRAINIAC2677", label: "GitHub" },
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

function createResearchAuthors(
    names: string[],
    equalContributors: string[] = [],
    affiliationIndices: Record<string, number[]> = {},
): ResearchAuthor[] {
    return names.map((name) => ({
        affiliationIndices: affiliationIndices[name],
        hasEqualContribution: equalContributors.includes(name),
        href: researchAuthorUrls[name],
        isProfileOwner: name === academicProfile.name,
        name,
    }));
}

const researchWorks: ResearchWork[] = [
    {
        abstract: [
            "Automated phoneme-level pronunciation assessment is vital for scalable speech therapy and language learning, yet validated tools for Arabic remain scarce. Harf-Speech is a modular system that scores Arabic pronunciation at the phoneme level on a clinical scale by combining an MSA phonetizer, a fine-tuned speech-to-phoneme model, Levenshtein alignment, and a blended scorer using longest common subsequence and edit-distance metrics.",
            "The study fine-tunes three ASR architectures on Arabic phoneme data and benchmarks them against zero-shot multimodal models. The strongest model achieves an 8.92% phoneme error rate. Clinical validation by three certified speech-language pathologists shows a Pearson correlation of 0.791 and ICC(2,1) of 0.659 with mean expert scores, demonstrating clinically aligned and interpretable assessment comparable to inter-rater expert agreement.",
        ],
        affiliations: [
            "Ministry of Defense, Saudi Arabia",
            "Ability Center, Saudi Arabia",
            "University of Rochester, USA",
        ],
        authors: createResearchAuthors(
            [
                "Asif Azad",
                "MD Sadik Hossain Shanto",
                "Mohammad Sadat Hossain",
                "Bdour Alwuqaysi",
                "Sabri Boughorbel",
                "Yahya Bokhari",
                "Abdulrhman Aljouie",
                "Ayah Othman Sindi",
                "Ehsan Hoque",
            ],
            [],
            {
                "Abdulrhman Aljouie": [1],
                "Asif Azad": [1],
                "Ayah Othman Sindi": [2],
                "Bdour Alwuqaysi": [1],
                "Ehsan Hoque": [1, 3],
                "MD Sadik Hossain Shanto": [1],
                "Mohammad Sadat Hossain": [1],
                "Sabri Boughorbel": [1],
                "Yahya Bokhari": [1],
            },
        ),
        authorship: "First author",
        citation: "Azad, A., Shanto, M. S. H., Hossain, M. S., Alwuqaysi, B., Boughorbel, S., Bokhari, Y., Aljouie, A., Sindi, A. O., & Hoque, E. (2026). Harf-Speech: A Clinically Aligned Framework for Arabic Phoneme-Level Speech Assessment. Accepted at Interspeech 2026.",
        description: [
            { text: "Developed a modular, " },
            { isEmphasized: true, text: "clinically aligned Arabic pronunciation-assessment framework" },
            { text: " combining speech-to-phoneme modeling with interpretable alignment-based scoring. It achieved an " },
            { isEmphasized: true, text: "8.92% phoneme error rate" },
            { text: " and " },
            { isEmphasized: true, text: "strong agreement with speech-language pathologists (r = 0.791)" },
            { text: ", enabling scalable assessment for an underserved language." },
        ],
        figure: {
            alt: "Harf-Speech methodology from phoneme extraction through alignment and clinical scoring",
            caption: "Harf-Speech pipeline from phoneme extraction to interpretable word-level clinical scoring.",
            src: "/images/publications/harf-speech.webp",
        },
        links: [
            { href: "https://arxiv.org/abs/2604.06191", label: "arXiv" },
            { href: "https://arxiv.org/pdf/2604.06191", label: "PDF" },
        ],
        publicationDate: "September 2026",
        slug: "harf-speech",
        title: "Harf-Speech: A Clinically Aligned Framework for Arabic Phoneme-Level Speech Assessment",
        venue: {
            href: "https://www.isca-speech.org/event-5462701",
            name: "Interspeech 2026",
        },
        venueSignals: [
            {
                label: "ICORE A · 2026",
                title: "Interspeech is ranked A by ICORE 2026",
            },
        ],
    },
    {
        abstract: [
            "Children with Autism Spectrum Disorder in Arabic-speaking countries face compounded barriers to effective speech and language therapy, including a shortage of specialists, limited service reach beyond urban centers, and a scarcity of culturally grounded digital therapy materials. Digital Harf is a pervasive, multimodal AI platform that extends clinician-led speech and language therapy into the home.",
            "The platform integrates language therapy, speech intelligibility, and picture-description modules within a workflow that adapts to each child’s performance. Its Agentic Synthetic Data Engine generates culturally relevant images, prompts, and language tasks under explicit therapeutic and cultural criteria. Evaluation by 13 licensed speech-language pathologists produced a 90.1% clinical acceptance rate for generated content without manual curation, while the broader platform is undergoing randomized clinical evaluation.",
        ],
        affiliations: [
            "Ministry of Defense, Riyadh, Saudi Arabia",
            "Ability Center, Saudi Arabia",
            "University of Rochester, Rochester, NY, USA",
        ],
        authors: createResearchAuthors(
            [
                "Asif Azad",
                "Mohammad Sadat Hossain",
                "MD Sadik Hossain Shanto",
                "Sabri Boughorbel",
                "Abdulrhman Aljouie",
                "Bdour Alwuqaysi",
                "Yahya Bokhari",
                "Ayah Othman Sindi",
                "Ehsan Hoque",
            ],
            [],
            {
                "Abdulrhman Aljouie": [1],
                "Asif Azad": [1],
                "Ayah Othman Sindi": [2],
                "Bdour Alwuqaysi": [1],
                "Ehsan Hoque": [1, 3],
                "MD Sadik Hossain Shanto": [1],
                "Mohammad Sadat Hossain": [1],
                "Sabri Boughorbel": [1],
                "Yahya Bokhari": [1],
            },
        ),
        authorship: "First author",
        citation: "Azad, A., Hossain, M. S., Shanto, M. S. H., Boughorbel, S., Aljouie, A., Alwuqaysi, B., Bokhari, Y., Sindi, A. O., & Hoque, E. (2026). Digital Harf: A Clinically Integrated Multimodal AI System for Pervasive Arabic Speech and Language Therapy. arXiv preprint arXiv:2607.27212.",
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
            { href: "https://arxiv.org/abs/2607.27212", label: "arXiv" },
            { href: "https://digitalharf.modhs.med.sa/", label: "Project" },
        ],
        publicationDate: "May 2026",
        slug: "digital-harf",
        title: "Digital Harf: A Clinically Integrated Multimodal AI System for Pervasive Arabic Speech and Language Therapy",
        venue: {
            href: "https://chi2027.acm.org/",
            name: "Targeting CHI 2027",
        },
    },
    {
        abstract: [
            "Timely detection of Parkinson’s disease remains limited by reliance on costly and geographically inaccessible in-person neurological evaluations. PARK is a web-based AI tool that screens for Parkinson’s disease using short webcam recordings of facial-expression, motor, and speech tasks.",
            "Across eight independent studies involving 1,865 participants, task-specific neural networks estimate risk and uncertainty before an uncertainty-calibrated fusion model combines their predictions. PARK achieves 80.2–80.6% accuracy and 0.85–0.87 AUROC across internal and external cohorts, remains stable across demographic groups, and receives favorable usability ratings in supervised and unsupervised settings. The findings support accessible, equitable, and uncertainty-aware remote neurological screening.",
        ],
        affiliations: [
            "University of Rochester, Rochester, NY, USA",
            "Bangladesh University of Engineering and Technology, Dhaka, Bangladesh",
            "Atria Health and Research Institute, New York, NY, USA",
            "University of Rochester Medical Center, Rochester, NY, USA",
            "InMotion, Beachwood, OH, USA",
            "Harvard Medical School, Boston, MA, USA",
            "Google Research, London, UK",
            "Ministry of Defense, Riyadh, Saudi Arabia",
        ],
        authors: createResearchAuthors(
            [
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
            ],
            [],
            {
                "Abdelrahman Abdelkader": [1],
                "Asif Azad": [2, 3],
                "Cathe Schwartz": [5],
                "E. Ray Dorsey": [3, 4],
                "Ehsan Hoque": [1, 8],
                "Emily Hartman": [4],
                "Erin Shelton": [5],
                "Evelyn Ma": [1],
                "Jamie L. Adams": [4],
                "Jan Freyberg": [7],
                "Karen Jaffe": [5],
                "Kristina B. Larson": [6],
                "M. Saifur Rahman": [2],
                "Md Saiful Islam": [1, 2],
                "Meghan Pawlik": [4],
                "Pai Liu": [1],
                "Ruth B. Schneider": [4],
                "Sooyong Park": [1],
                "Tariq Adnan": [1, 2],
                "Zipei Liu": [1],
            },
        ),
        citation: "Islam, M. S., Adnan, T., Abdelkader, A., et al. (2026). Validation of remote multimodal AI screening for Parkinson disease across diverse settings. Communications Medicine.",
        description: [
            { text: "Validated " },
            { isEmphasized: true, text: "PARK, an uncertainty-aware multimodal screening system" },
            { text: " across " },
            { isEmphasized: true, text: "1,865 participants in supervised and at-home settings" },
            { text: ", achieving " },
            { isEmphasized: true, text: "0.85–0.87 AUROC" },
            { text: ". Contribution: Collaborated with the first author to " },
            { isEmphasized: true, text: "design and implement the paper’s visualizations" },
            { text: " and contributed to " },
            { isEmphasized: true, text: "UFNet’s uncertainty-quantification analysis" },
            { text: "." },
        ],
        figure: {
            alt: "PARK framework combining facial motor and speech tasks with uncertainty-aware UFNet fusion",
            caption: "PARK combines facial, motor, and speech tasks through uncertainty-aware UFNet fusion.",
            src: "/images/publications/parkinson-screening-validation.webp",
        },
        links: [
            {
                href: "https://www.nature.com/articles/s43856-026-01606-6",
                label: "Paper",
            },
        ],
        publicationDate: "May 2026",
        slug: "parkinson-screening-validation",
        title: "Validation of Remote Multimodal AI Screening for Parkinson Disease Across Diverse Settings",
        venue: {
            href: "https://www.nature.com/articles/s43856-026-01606-6",
            name: "Communications Medicine",
        },
        venueSignals: [
            {
                label: "Q1 journal",
                title: "Communications Medicine is ranked Q1",
            },
            {
                label: "Impact Factor 7.4",
                title: "2025 Journal Impact Factor from Nature Portfolio",
            },
        ],
    },
    {
        abstract: [
            "PULSAR is a method for screening Parkinson’s disease from webcam-recorded videos of the finger-tapping task used in the MDS-UPDRS. It is trained and evaluated on data from 382 participants, including 183 participants who self-reported Parkinson’s disease.",
            "An adaptive graph convolutional network learns task-specific spatiotemporal relationships, while a multi-stream architecture captures finger-joint location, tapping velocity, and acceleration. Positive-unlabeled learning addresses potentially undiagnosed cases among self-reported negative labels and outperforms traditional supervised learning. PULSAR achieves 80.95% validation accuracy and 71.29% mean accuracy on an independent test set, demonstrating promise for accessible screening when reliable clinical labels are scarce.",
        ],
        affiliations: [
            "Bangladesh University of Engineering and Technology, Bangladesh",
            "University of Massachusetts Amherst, USA",
            "University of Rochester, USA",
        ],
        authors: createResearchAuthors(
            [
                "Md Zarif Ul Alam",
                "Asif Azad",
                "Md Saiful Islam",
                "Ehsan Hoque",
                "M Saifur Rahman",
            ],
            ["Md Zarif Ul Alam", "Asif Azad"],
            {
                "Asif Azad": [1],
                "Ehsan Hoque": [3],
                "M Saifur Rahman": [1],
                "Md Saiful Islam": [3],
                "Md Zarif Ul Alam": [1, 2],
            },
        ),
        authorship: "Co-first author",
        citation: "Alam, M. Z. U., Azad, A., Islam, M. S., Hoque, E., & Rahman, M. S. (2026). PULSAR: Graph-Based Positive Unlabeled Learning with Multi-Stream Adaptive Convolutions for Parkinson’s Disease Recognition. ACM Transactions on Computing for Healthcare, 7(2). https://doi.org/10.1145/3799417",
        description: [
            { text: "Co-developed " },
            { isEmphasized: true, text: "PULSAR, a positive-unlabeled multi-stream graph-convolutional framework" },
            { text: " for Parkinson’s screening from webcam finger-tapping videos. By modeling noisy self-reported labels and joint, bone, velocity, and acceleration streams, it achieved " },
            { isEmphasized: true, text: "71.3% mean accuracy on an independent test set" },
            { text: " despite limited reliable labels." },
        ],
        figure: {
            alt: "PULSAR pipeline from webcam finger tapping to multi-stream adaptive graph convolution",
            caption: "PULSAR screening pipeline from webcam finger tapping to multi-stream adaptive graph convolution.",
            src: "/images/publications/pulsar.webp",
        },
        links: [
            {
                href: "https://dl.acm.org/doi/10.1145/3799417",
                label: "Paper",
            },
            {
                href: "https://zarif98sjs.github.io/PULSAR/",
                label: "Project",
            },
            {
                href: "https://github.com/BRAINIAC2677/pulsar",
                label: "Code",
            },
        ],
        publicationDate: "April 2026",
        slug: "pulsar",
        title: "PULSAR: Graph-Based Positive Unlabeled Learning with Multi-Stream Adaptive Convolutions for Parkinson’s Disease Recognition",
        venue: {
            href: "https://dl.acm.org/doi/10.1145/3799417",
            name: "ACM Transactions on Computing for Healthcare",
        },
        venueSignals: [
            {
                label: "Q1 · Impact Factor 8.0",
                title: "2025 Journal Citation Reports metrics reported by ACM",
            },
        ],
    },
    {
        abstract: [
            "Vision-language models have made substantial progress in complex visual understanding, but their ability to quantify uncertainty has received less attention. This study evaluates 18 open- and closed-source models across six multimodal datasets and three scoring functions, including instruction-guided likelihood proxies for API-only models without token-level probability access.",
            "The results show that larger models generally quantify uncertainty more effectively and that predictions made with greater certainty tend to be more accurate. Mathematical and reasoning-intensive tasks remain particularly challenging across models. The study establishes a broad foundation for evaluating uncertainty and reliability in multimodal systems.",
        ],
        affiliations: [
            "Bangladesh University of Engineering and Technology, Dhaka, Bangladesh",
            "Qatar Computing Research Institute, HBKU, Doha, Qatar",
        ],
        authors: createResearchAuthors(
            [
                "Asif Azad",
                "Mohammad Sadat Hossain",
                "MD Sadik Hossain Shanto",
                "M Saifur Rahman",
                "Md Rizwan Parvez",
            ],
            [],
            {
                "Asif Azad": [1],
                "M Saifur Rahman": [1],
                "MD Sadik Hossain Shanto": [1],
                "Md Rizwan Parvez": [2],
                "Mohammad Sadat Hossain": [1],
            },
        ),
        authorship: "First author",
        citation: "Azad, A., Hossain, M. S., Shanto, M. S. H., Rahman, M. S., & Parvez, M. R. (2026). The Art of Saying ‘Maybe’: A Conformal Lens for Uncertainty Benchmarking in VLMs. Findings of the Association for Computational Linguistics: EACL 2026, 5185–5201.",
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
        slug: "conformal-uncertainty-vlms",
        title: "The Art of Saying ‘Maybe’: A Conformal Lens for Uncertainty Benchmarking in VLMs",
        venue: {
            href: "https://aclanthology.org/2026.findings-eacl.274/",
            name: "Findings of EACL 2026",
        },
        venueSignals: [
            {
                label: "EACL · ICORE A",
                title: "EACL is ranked A by ICORE 2026; Findings is not ranked separately",
            },
        ],
    },
    {
        abstract: [
            "As machine-learning systems show growing promise for clinical diagnosis, establishing their reliability is essential for responsible medical deployment. This work evaluates Monte Carlo Dropout, Deep Evidential Classification, and Bayesian Neural Networks across motor, facial, and speech datasets for Parkinson’s disease detection.",
            "Deep Evidential Classification performs poorly in both diagnostic accuracy and uncertainty assessment, while Monte Carlo Dropout and Bayesian Neural Networks provide more dependable uncertainty estimates. Identifying ambiguous predictions through uncertainty estimation can reduce diagnostic errors and support safer adoption of AI in medicine.",
        ],
        affiliations: [
            "Bangladesh University of Engineering and Technology, Dhaka, Bangladesh",
            "University of Rochester, Rochester, NY, USA",
            "Atria Health and Research Institute, New York, NY, USA",
        ],
        authors: createResearchAuthors(
            [
                "Asif Azad",
                "Md. Saiful Islam",
                "Ehsan Hoque",
                "M. Saifur Rahman",
            ],
            [],
            {
                "Asif Azad": [1, 3],
                "Ehsan Hoque": [2, 3],
                "M. Saifur Rahman": [1],
                "Md. Saiful Islam": [1, 2],
            },
        ),
        authorship: "First author",
        citation: "Azad, A., Islam, M. S., Hoque, E., & Rahman, M. S. (2025). Beyond Accuracy: Enhancing Parkinson’s Diagnosis with Uncertainty Quantification of Machine Learning Models. In Artificial Intelligence in Healthcare (AIiH 2025), LNCS 16038, 33–46. Springer.",
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
        distinction: "AIiH 2025 Best Paper Award nominee",
        publicationDate: "August 2025",
        slug: "beyond-accuracy",
        title: "Beyond Accuracy: Enhancing Parkinson’s Diagnosis with Uncertainty Quantification of Machine Learning Models",
        venue: {
            href: "https://link.springer.com/chapter/10.1007/978-3-032-00652-3_3",
            name: "AIiH 2025 · Springer LNCS",
        },
    },
];

const websitePublicationOrder = [
    "digital-harf",
    "harf-speech",
    "pulsar",
    "beyond-accuracy",
    "parkinson-screening-validation",
    "conformal-uncertainty-vlms",
];

export const selectedResearch = websitePublicationOrder
    .map((slug) => researchWorks.find((work) => work.slug === slug))
    .filter((work): work is ResearchWork => work !== undefined);

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
