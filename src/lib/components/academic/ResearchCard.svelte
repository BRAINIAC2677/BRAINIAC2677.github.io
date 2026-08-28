<script lang="ts">
    import type { ResearchWork } from "$lib/interfaces/academic";
    import AcademicLink from "$lib/components/academic/AcademicLink.svelte";
    import PublicationLinkIcon from "$lib/components/academic/PublicationLinkIcon.svelte";
    import PublicationAuthor from "$lib/components/academic/PublicationAuthor.svelte";

    export let publicationNumber: number;
    export let work: ResearchWork;

    function formatPublicationNumber() {
        return String(publicationNumber).padStart(2, "0");
    }

    function hasEqualContributors() {
        return work.authors.some((author) => author.hasEqualContribution);
    }
</script>

<article class="publication">
    <span class="publication__number">{formatPublicationNumber()}</span>

    <div class="publication__content">
        <div class="publication__signals">
            {#if work.authorship}
                <span class="publication__signal--authorship">{work.authorship}</span>
            {/if}
            {#each work.venueSignals ?? [] as signal}
                <span title={signal.title}>{signal.label}</span>
            {/each}
            {#if work.distinction}
                <strong>{work.distinction}</strong>
            {/if}
        </div>

        <div class="publication__meta">
            <AcademicLink href={work.venue.href} tone="accent">{work.venue.name}</AcademicLink>
            <span>{work.publicationDate}</span>
            {#if work.status}<span>{work.status}</span>{/if}
        </div>
        <h3><a href={`/publications/${work.slug}`}>{work.title}</a></h3>
        <p class="publication__authors">
            {#each work.authors as author, index}
                {#if index > 0}, {/if}<PublicationAuthor {author} />
            {/each}
        </p>
        {#if hasEqualContributors()}
            <p class="publication__author-note">* Equal contribution</p>
        {/if}

        <div class="publication__footer">
            <div class="publication__links">
                <a class="publication__details" href={`/publications/${work.slug}`}>
                    <PublicationLinkIcon label="View details" />
                    <span>View details</span>
                </a>
                {#each work.links as link}
                    <a href={link.href} target="_blank" rel="noreferrer">
                        <PublicationLinkIcon label={link.label} />
                        <span>{link.label}</span>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</article>

<style>
    .publication {
        display: grid;
        grid-template-columns: 2.5rem minmax(0, 1fr);
        gap: clamp(0.8rem, 2vw, 1.4rem);
        padding: 1.45rem 0;
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

    .publication__signals {
        display: flex;
        gap: 0.45rem;
        flex-wrap: wrap;
        margin-bottom: 0.72rem;
        align-items: center;
    }

    .publication__signals span,
    .publication__signals strong {
        padding: 0.3rem 0.52rem;
        border: 1px solid color-mix(in srgb, var(--accent) 46%, var(--border));
        background: var(--surface);
        color: var(--accent-strong);
        font-size: 0.63rem;
        font-weight: 800;
        letter-spacing: 0.035em;
        line-height: 1.2;
        text-decoration: none;
    }

    .publication__signals .publication__signal--authorship {
        background: var(--surface);
        color: var(--accent-strong);
    }

    .publication__signals strong {
        background: var(--accent-soft);
    }

    .publication__meta > :global(* + *)::before {
        margin-right: 0.65rem;
        color: var(--border-strong);
        content: "·";
    }

    h3 {
        max-width: 52rem;
        margin-top: 0.62rem;
        font-family: var(--font-display);
        font-size: clamp(1.25rem, 2.3vw, 1.62rem);
        font-weight: 600;
        letter-spacing: -0.025em;
        line-height: 1.18;
    }

    h3 a {
        color: inherit;
        text-decoration: none;
        transition: color 150ms ease;
    }

    h3 a:hover {
        color: var(--accent-strong);
    }

    .publication__authors {
        margin-top: 0.62rem;
        color: var(--muted-strong);
        font-size: 0.74rem;
        font-weight: 500;
        line-height: 1.5;
    }

    .publication__author-note {
        margin-top: 0.35rem;
        color: var(--muted);
        font-size: 0.62rem;
        font-weight: 600;
    }

    .publication__footer {
        margin-top: 1rem;
    }

    .publication__links {
        display: flex;
        gap: 0.55rem;
        flex-wrap: wrap;
        align-items: center;
    }

    .publication__links a {
        min-height: 2.1rem;
        display: inline-flex;
        gap: 0.42rem;
        padding: 0.45rem 0.72rem;
        border: 1px solid var(--border-strong);
        background: var(--surface);
        align-items: center;
        color: var(--muted-strong);
        font-size: 0.72rem;
        font-weight: 800;
        text-decoration: none;
        transition:
            border-color 150ms ease,
            color 150ms ease,
            background-color 150ms ease;
    }

    .publication__details {
        border-color: color-mix(in srgb, var(--accent) 55%, var(--border)) !important;
        background: var(--accent-soft) !important;
        color: var(--accent-strong) !important;
    }

    .publication__links a:hover {
        border-color: var(--accent);
        color: var(--accent-strong);
    }

    @media (max-width: 640px) {
        .publication {
            grid-template-columns: 2rem minmax(0, 1fr);
            gap: 0.65rem;
        }

        .publication__links a {
            min-height: 2.25rem;
            padding-inline: 0.78rem;
        }
    }
</style>
