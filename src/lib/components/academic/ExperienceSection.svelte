<script lang="ts">
    import RichText from "$lib/components/academic/RichText.svelte";
    import type { AcademicExperience } from "$lib/interfaces/academic";
    import AcademicLink from "$lib/components/academic/AcademicLink.svelte";
    import SectionHeading from "$lib/components/academic/SectionHeading.svelte";

    export let experience: AcademicExperience[];
</script>

<section id="experience" class="page-section page-shell">
    <SectionHeading eyebrow="Background" title="Experience" />

    <div class="experience-list">
        {#each experience as item}
            <article class="experience-entry">
                <div class="experience-entry__date">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                </div>
                <div class="experience-entry__record">
                    <h3>{item.role}</h3>
                    <p class="experience-entry__institution">
                        {#if item.institutionUrl}
                            <AcademicLink href={item.institutionUrl}>{item.institution}</AcademicLink>
                        {:else}
                            {item.institution}
                        {/if}
                    </p>
                    <ul class="experience-entry__description">
                        {#each item.description as bullet}
                            <li>
                                <RichText parts={bullet} />
                            </li>
                        {/each}
                    </ul>
                </div>
            </article>
        {/each}
    </div>
</section>

<style>
    .experience-list {
        border-top: 1px solid var(--border-strong);
    }

    .experience-entry {
        position: relative;
        display: grid;
        grid-template-columns: 11rem minmax(0, 1fr);
        gap: clamp(1.5rem, 5vw, 4rem);
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--border);
    }

    .experience-entry::before {
        position: absolute;
        top: 1.8rem;
        left: -0.2rem;
        width: 0.42rem;
        height: 0.42rem;
        border-radius: 50%;
        background: var(--accent);
        content: "";
        transform: translateX(-100%);
    }

    .experience-entry__date {
        display: grid;
        gap: 0.35rem;
        align-content: start;
        color: var(--muted);
        font-size: 0.67rem;
        font-weight: 600;
    }

    .experience-entry__date span:first-child {
        color: var(--accent);
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }

    h3 {
        font-family: var(--font-display);
        font-size: 1.45rem;
        font-weight: 600;
        letter-spacing: -0.02em;
    }

    .experience-entry__institution {
        margin-top: 0.25rem;
        color: var(--muted-strong);
        font-size: 0.75rem;
        font-weight: 600;
    }

    .experience-entry__description {
        max-width: 48rem;
        margin-top: 0.65rem;
        margin-bottom: 0;
        padding-left: 0;
        color: var(--muted);
        font-size: 0.8rem;
        line-height: 1.65;
        list-style: none;
    }

    .experience-entry__description li {
        position: relative;
        padding-left: 1.05rem;
    }

    .experience-entry__description li + li {
        margin-top: 0.42rem;
    }

    .experience-entry__description li::before {
        position: absolute;
        left: 0;
        color: var(--accent);
        content: "—";
    }

    .experience-entry__description :global(strong) {
        color: var(--muted-strong);
        font-weight: 700;
    }

    @media (max-width: 640px) {
        .experience-entry {
            grid-template-columns: 1fr;
            gap: 0.85rem;
        }

        .experience-entry::before {
            display: none;
        }
    }
</style>
