<script lang="ts">
    import SiteFooter from "$lib/components/academic/SiteFooter.svelte";
    import SiteHeader from "$lib/components/academic/SiteHeader.svelte";
    import HeroSection from "$lib/components/academic/HeroSection.svelte";
    import NewsSection from "$lib/components/academic/NewsSection.svelte";
    import ResearchSection from "$lib/components/academic/ResearchSection.svelte";
    import EducationSection from "$lib/components/academic/EducationSection.svelte";
    import ExperienceSection from "$lib/components/academic/ExperienceSection.svelte";
    import LeadershipSection from "$lib/components/academic/LeadershipSection.svelte";
    import { academicExperience, academicLeadership, academicProfile, academicUpdates, education, selectedHonors, selectedResearch } from "$lib/data/academic-profile";
</script>

<svelte:head>
    <title>Asif Azad · AI Research Engineer</title>
    <meta
        name="description"
        content="Asif Azad is an AI research engineer working on responsible and trustworthy AI for high-stakes domains, especially healthcare."
    />
</svelte:head>

<SiteHeader name={academicProfile.name} cvUrl={academicProfile.cvUrl} />

<main>
    <HeroSection profile={academicProfile} />
    <NewsSection updates={academicUpdates} />
    <ResearchSection work={selectedResearch} />
    <ExperienceSection experience={academicExperience} />
    <EducationSection {education} honors={selectedHonors} />
    <LeadershipSection leadership={academicLeadership} />
</main>

<SiteFooter profile={academicProfile} />
