<script lang="ts">
    import type { ResearchWork } from "$lib/interfaces/academic";
    import AcademicLink from "$lib/components/academic/AcademicLink.svelte";
    import PublicationAuthor from "$lib/components/academic/PublicationAuthor.svelte";

    export let publicationNumber: number;
    export let work: ResearchWork;

    function formatPublicationNumber() {
        return String(publicationNumber).padStart(2, "0");
    }
</script>

<article class="publication">
    <span class="publication__number">{formatPublicationNumber()}</span>

    <div class="publication__content">
        <div class="publication__meta">
            <AcademicLink href={work.venue.href} tone="accent">{work.venue.name}</AcademicLink>
            <span>{work.publicationDate}</span>
            <span>{work.status}</span>
        </div>
        <h3>{work.title}</h3>
        <p class="publication__authors">
            {#each work.authors as author, index}
                {#if index > 0}, {/if}<PublicationAuthor {author} />
            {/each}
        </p>
        <p class="publication__description">{work.description}</p>
    </div>

    <div class="publication__links">
        {#each work.links as link}
            <AcademicLink href={link.href}>{link.label}</AcademicLink>
        {/each}
    </div>
</article>

<style>
    .publication {
        display: grid;
        grid-template-columns: 3rem minmax(0, 1fr) 5rem;
        gap: clamp(1rem, 3vw, 2rem);
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--border);
        align-items: start;
    }

    .publication__number {
        padding-top: 0.2rem;
        color: var(--muted);
        font-size: 0.67rem;
        font-weight: 700;
        letter-spacing: 0.08em;
    }

    .publication__meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.65rem;
        align-items: center;
        color: var(--muted);
        font-size: 0.62rem;
        font-weight: 600;
        letter-spacing: 0.07em;
        text-transform: uppercase;
    }

    .publication__meta > :global(* + *)::before {
        margin-right: 0.65rem;
        color: var(--border-strong);
        content: "·";
    }

    h3 {
        max-width: 48rem;
        margin-top: 0.55rem;
        font-family: var(--font-display);
        font-size: clamp(1.35rem, 2.5vw, 1.75rem);
        font-weight: 600;
        letter-spacing: -0.025em;
        line-height: 1.15;
    }

    .publication__authors {
        margin-top: 0.55rem;
        color: var(--muted-strong);
        font-size: 0.74rem;
        font-weight: 500;
        line-height: 1.5;
    }

    .publication__description {
        max-width: 48rem;
        margin-top: 0.65rem;
        color: var(--muted);
        font-size: 0.78rem;
        line-height: 1.65;
    }

    .publication__links {
        display: grid;
        gap: 0.55rem;
        justify-items: end;
        color: var(--muted-strong);
        font-size: 0.68rem;
        font-weight: 700;
    }

    @media (max-width: 640px) {
        .publication {
            grid-template-columns: 1fr;
            gap: 0.55rem;
        }

        .publication__links {
            grid-column: 1;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-items: initial;
        }
    }
</style>
