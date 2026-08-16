<script lang="ts">
    import RichText from "$lib/components/academic/RichText.svelte";
    import type { AcademicLeadership } from "$lib/interfaces/academic";
    import AcademicLink from "$lib/components/academic/AcademicLink.svelte";
    import SectionHeading from "$lib/components/academic/SectionHeading.svelte";

    export let leadership: AcademicLeadership[];
</script>

<section id="leadership" class="page-section page-shell">
    <SectionHeading eyebrow="Beyond research" title="Leadership" />

    <div class="leadership-list">
        {#each leadership as item}
            <article class="leadership-entry">
                <span class="leadership-entry__period">{item.period}</span>
                <div>
                    <h3>{item.title}</h3>
                    <p class="leadership-entry__organization">
                        {#if item.organizationUrl}
                            <AcademicLink href={item.organizationUrl}>{item.organization}</AcademicLink>
                        {:else}
                            {item.organization}
                        {/if}
                    </p>
                    <p class="leadership-entry__description">
                        <RichText parts={item.description} />
                    </p>
                </div>
            </article>
        {/each}
    </div>
</section>

<style>
    .leadership-list {
        border-top: 1px solid var(--border-strong);
    }

    .leadership-entry {
        display: grid;
        grid-template-columns: 11rem minmax(0, 1fr);
        gap: clamp(1.5rem, 5vw, 4rem);
        padding: 1.35rem 0;
        border-bottom: 1px solid var(--border);
    }

    .leadership-entry__period {
        padding-top: 0.2rem;
        color: var(--accent);
        font-size: 0.67rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }

    h3 {
        font-family: var(--font-display);
        font-size: 1.3rem;
        font-weight: 600;
        letter-spacing: -0.02em;
    }

    .leadership-entry__organization {
        margin-top: 0.25rem;
        color: var(--muted-strong);
        font-size: 0.75rem;
        font-weight: 600;
    }

    .leadership-entry__description {
        max-width: 48rem;
        margin-top: 0.55rem;
        color: var(--muted);
        font-size: 0.8rem;
        line-height: 1.65;
    }

    .leadership-entry__description :global(strong) {
        color: var(--muted-strong);
        font-weight: 700;
    }

    @media (max-width: 640px) {
        .leadership-entry {
            grid-template-columns: 1fr;
            gap: 0.45rem;
        }
    }
</style>
