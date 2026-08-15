<script lang="ts">
    import type { ResearchWork } from "$lib/interfaces/academic";
    import ResearchCard from "$lib/components/academic/ResearchCard.svelte";
    import SectionHeading from "$lib/components/academic/SectionHeading.svelte";

    export let work: ResearchWork[];
</script>

<section id="publications" class="page-section page-shell">
    <SectionHeading
        eyebrow="Research"
        title="Selected publications"
    />

    <div class="publication-list">
        {#each work as researchWork, index}
            <ResearchCard work={researchWork} publicationNumber={index + 1} />
        {/each}
    </div>
</section>

<style>
    .publication-list {
        border-top: 1px solid var(--border-strong);
    }
</style>
