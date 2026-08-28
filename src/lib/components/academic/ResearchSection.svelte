<script lang="ts">
    import type { ResearchWork } from "$lib/interfaces/academic";
    import ResearchCard from "$lib/components/academic/ResearchCard.svelte";
    import SectionHeading from "$lib/components/academic/SectionHeading.svelte";

    export let work: ResearchWork[];

    $: firstAuthorCount = work.filter(({ authorship }) => authorship === "First author").length;
    $: coFirstAuthorCount = work.filter(({ authorship }) => authorship === "Co-first author").length;
    $: q1JournalCount = work.filter(({ venueSignals }) => venueSignals?.some(({ label }) => label.includes("Q1"))).length;
    $: icoreAVenueCount = work.filter(({ venueSignals }) => venueSignals?.some(({ label }) => label.includes("ICORE A"))).length;
    $: bestPaperNominationCount = work.filter(({ distinction }) => distinction?.includes("Best Paper")).length;
</script>

<section id="publications" class="page-section page-shell">
    <SectionHeading
        eyebrow="Research"
        title="Selected publications"
    />

    <div class="publication-summary" aria-label="Publication highlights">
        <span><strong>{firstAuthorCount}</strong> first-author papers</span>
        <span><strong>{coFirstAuthorCount}</strong> co-first-author paper</span>
        <span><strong>{q1JournalCount}</strong> Q1 journal papers</span>
        <span><strong>{icoreAVenueCount}</strong> ICORE A venue papers</span>
        <span><strong>{bestPaperNominationCount}</strong> best-paper nomination</span>
    </div>

    <div class="publication-list">
        {#each work as researchWork, index}
            <ResearchCard work={researchWork} publicationNumber={index + 1} />
        {/each}
    </div>
</section>

<style>
    section {
        padding-top: clamp(2rem, 3.5vw, 2.8rem);
    }

    .publication-summary {
        display: flex;
        gap: 0.55rem 1.2rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
        padding: 0.85rem 0;
        border-top: 1px solid var(--border-strong);
        border-bottom: 1px solid var(--border);
        color: var(--muted-strong);
        font-size: 0.68rem;
        font-weight: 700;
    }

    .publication-summary span {
        display: inline-flex;
        gap: 0.32rem;
        align-items: baseline;
    }

    .publication-summary strong {
        color: var(--accent-strong);
        font-size: 0.82rem;
        font-weight: 800;
    }

    .publication-list {
        border-top: 0;
    }

    @media (max-width: 640px) {
        .publication-summary {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.65rem 1rem;
        }
    }
</style>
