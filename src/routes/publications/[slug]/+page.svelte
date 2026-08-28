<script lang="ts">
    import type { PageData } from "./$types";
    import { academicProfile } from "$lib/data/academic-profile";
    import SiteFooter from "$lib/components/academic/SiteFooter.svelte";
    import SiteHeader from "$lib/components/academic/SiteHeader.svelte";
    import AcademicLink from "$lib/components/academic/AcademicLink.svelte";
    import PublicationLinkIcon from "$lib/components/academic/PublicationLinkIcon.svelte";
    import PublicationAuthor from "$lib/components/academic/PublicationAuthor.svelte";

    export let data: PageData;

    let citationCopied = false;

    function hasEqualContributors() {
        return data.publication.authors.some((author) => author.hasEqualContribution);
    }

    async function copyCitation() {
        await navigator.clipboard.writeText(data.publication.citation);
        citationCopied = true;
        window.setTimeout(() => (citationCopied = false), 1800);
    }
</script>

<svelte:head>
    <title>{data.publication.title} · Asif Azad</title>
    <meta name="description" content={data.publication.description.map(({ text }) => text).join("")} />
</svelte:head>

<SiteHeader
    name={academicProfile.name}
    cvUrl={academicProfile.cvUrl}
    homeHref="/"
    scholarUrl={academicProfile.scholarUrl}
    sectionPrefix="/"
/>

<main id="top" class="publication-page page-shell">
    <a class="publication-page__back" href="/#publications">Back to publications</a>

    <article>
        <header class="publication-hero">
            <h1>{data.publication.title}</h1>

            <p class="publication-hero__authors">
                {#each data.publication.authors as author, index}
                    {#if index > 0}, {/if}<PublicationAuthor {author} showAffiliations />
                {/each}
            </p>

            {#if hasEqualContributors()}
                <p class="publication-hero__author-note">* Equal contribution / co-first authors</p>
            {/if}

            <ol class="publication-hero__affiliations">
                {#each data.publication.affiliations as affiliation, index}
                    <li><sup>{index + 1}</sup>{affiliation}</li>
                {/each}
            </ol>

            <div class="publication-hero__venue">
                <AcademicLink href={data.publication.venue.href} tone="accent">
                    {data.publication.venue.name}
                </AcademicLink>
                <span>{data.publication.publicationDate}</span>
                {#if data.publication.status}<span>{data.publication.status}</span>{/if}
            </div>

            <div class="publication-hero__badges">
                {#if data.publication.authorship}<span>{data.publication.authorship}</span>{/if}
                {#each data.publication.venueSignals ?? [] as signal}
                    <span title={signal.title}>{signal.label}</span>
                {/each}
                {#if data.publication.distinction}<strong>{data.publication.distinction}</strong>{/if}
            </div>

            <nav class="publication-hero__links" aria-label="Publication links">
                {#each data.publication.links as link}
                    <a href={link.href} target="_blank" rel="noreferrer">
                        <PublicationLinkIcon label={link.label} />
                        <span>{link.label}</span>
                    </a>
                {/each}
            </nav>
        </header>

        {#if data.publication.figure}
            <figure class="publication-figure">
                <div class="publication-figure__stage">
                    <img src={data.publication.figure.src} alt={data.publication.figure.alt} />
                </div>
                <figcaption>{data.publication.figure.caption}</figcaption>
            </figure>
        {/if}

        <section class="publication-abstract">
            <h2>Abstract</h2>
            <div class="publication-abstract__body">
                {#each data.publication.abstract as paragraph}
                    <p>{paragraph}</p>
                {/each}
            </div>
        </section>

        <section class="publication-citation">
            <h2>Citation</h2>
            <div class="publication-citation__block">
                <p>{data.publication.citation}</p>
                <button type="button" on:click={copyCitation}>{citationCopied ? "Copied" : "Copy citation"}</button>
            </div>
        </section>
    </article>
</main>

<SiteFooter profile={academicProfile} />

<style>
    .publication-page {
        padding-top: clamp(1rem, 2vw, 1.65rem);
    }

    .publication-page__back {
        color: var(--muted-strong);
        font-size: 0.68rem;
        font-weight: 700;
        text-decoration-color: var(--border-strong);
        text-underline-offset: 0.24em;
    }

    .publication-page__back:hover {
        color: var(--accent-strong);
        text-decoration-color: currentColor;
    }

    article {
        padding-bottom: clamp(1.5rem, 4vw, 3rem);
    }

    .publication-hero {
        max-width: 60rem;
        margin-inline: auto;
        padding: clamp(0.9rem, 2vw, 1.35rem) 0 clamp(1.4rem, 3vw, 1.9rem);
        border-bottom: 1px solid var(--border-strong);
        text-align: center;
    }

    h1 {
        max-width: 55rem;
        margin-inline: auto;
        font-family: var(--font-display);
        font-size: clamp(1.95rem, 4.3vw, 3.25rem);
        font-weight: 500;
        letter-spacing: -0.04em;
        line-height: 1.06;
    }

    .publication-hero__authors {
        max-width: 55rem;
        margin: 0.75rem auto 0;
        color: var(--muted-strong);
        font-size: 0.76rem;
        line-height: 1.65;
    }

    .publication-hero__author-note {
        margin-top: 0.38rem;
        color: var(--muted);
        font-size: 0.62rem;
        font-weight: 600;
    }

    .publication-hero__affiliations {
        display: flex;
        gap: 0.32rem 1rem;
        flex-wrap: wrap;
        margin: 0.52rem auto 0;
        padding: 0;
        align-items: center;
        justify-content: center;
        color: var(--muted);
        font-size: 0.64rem;
        line-height: 1.45;
        list-style: none;
    }

    .publication-hero__affiliations sup {
        margin-right: 0.2rem;
        color: var(--accent-strong);
        font-weight: 800;
    }

    .publication-hero__venue {
        display: flex;
        gap: 0.48rem 0.68rem;
        flex-wrap: wrap;
        margin-top: 0.65rem;
        align-items: center;
        justify-content: center;
        color: var(--muted);
        font-size: 0.64rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }

    .publication-hero__venue > :global(* + *)::before {
        margin-right: 0.68rem;
        color: var(--border-strong);
        content: "·";
    }

    .publication-hero__badges {
        display: flex;
        gap: 0.45rem;
        flex-wrap: wrap;
        margin-top: 0.55rem;
        align-items: center;
        justify-content: center;
    }

    .publication-hero__badges span,
    .publication-hero__badges strong {
        padding: 0.3rem 0.5rem;
        border: 1px solid color-mix(in srgb, var(--accent) 46%, var(--border));
        background: var(--surface);
        color: var(--accent-strong);
        font-size: 0.62rem;
        font-weight: 800;
        letter-spacing: 0.025em;
        text-decoration: none;
    }

    .publication-hero__badges span {
        background: var(--surface);
        color: var(--accent-strong);
    }

    .publication-hero__badges strong {
        background: var(--accent-soft);
    }

    .publication-hero__links {
        display: flex;
        gap: 0.55rem;
        flex-wrap: wrap;
        margin-top: 0.72rem;
        align-items: center;
        justify-content: center;
    }

    .publication-hero__links a {
        min-height: 2.2rem;
        display: inline-flex;
        gap: 0.42rem;
        padding: 0.46rem 0.72rem;
        border: 1px solid var(--border-strong);
        background: var(--surface);
        align-items: center;
        color: var(--muted-strong);
        font-size: 0.71rem;
        font-weight: 800;
        text-decoration: none;
    }

    .publication-hero__links a:hover {
        border-color: var(--accent);
        color: var(--accent-strong);
    }

    .publication-figure {
        max-width: 60rem;
        margin: clamp(1.4rem, 3vw, 2.15rem) auto 0;
    }

    .publication-figure__stage {
        display: grid;
        min-height: 12rem;
        padding: clamp(0.8rem, 2vw, 1.35rem);
        border: 1px solid var(--border);
        background: #ffffff;
        place-items: center;
    }

    .publication-figure img {
        width: 100%;
        max-height: min(64vh, 44rem);
        display: block;
        object-fit: contain;
    }

    .publication-figure figcaption {
        max-width: 52rem;
        margin: 0.65rem auto 0;
        color: var(--muted);
        font-size: 0.66rem;
        line-height: 1.55;
        text-align: center;
    }

    .publication-abstract,
    .publication-citation {
        max-width: 52rem;
        margin-inline: auto;
        padding: clamp(1.8rem, 3.5vw, 2.7rem) 0;
        border-bottom: 1px solid var(--border);
    }

    .publication-abstract h2,
    .publication-citation h2 {
        font-family: var(--font-display);
        font-size: clamp(1.9rem, 4vw, 2.6rem);
        font-weight: 500;
        letter-spacing: -0.035em;
        text-align: center;
    }

    .publication-abstract__body {
        display: grid;
        gap: 0.8rem;
        margin-top: 1.1rem;
    }

    .publication-abstract__body p {
        color: var(--muted-strong);
        font-size: 0.88rem;
        line-height: 1.8;
    }

    .publication-citation__block {
        position: relative;
        margin-top: 1.1rem;
        padding: 1.15rem 8.5rem 1.15rem 1.2rem;
        border: 1px solid var(--border);
        border-left: 2px solid var(--accent);
        background: var(--surface);
    }

    .publication-citation__block p {
        color: var(--muted-strong);
        font-size: 0.75rem;
        line-height: 1.7;
    }

    .publication-citation button {
        position: absolute;
        top: 0.85rem;
        right: 0.85rem;
        padding: 0.55rem 0.75rem;
        border: 1px solid var(--border-strong);
        background: var(--surface);
        color: var(--muted-strong);
        font-size: 0.66rem;
        font-weight: 700;
    }

    .publication-citation button:hover {
        border-color: var(--accent-muted);
        color: var(--accent-strong);
    }

    @media (max-width: 640px) {
        .publication-page {
            padding-top: 1.1rem;
        }

        h1 {
            font-size: clamp(1.8rem, 9vw, 2.4rem);
        }

        .publication-hero__affiliations {
            align-items: flex-start;
            flex-direction: column;
            text-align: left;
        }

        .publication-figure {
            margin-top: 1.15rem;
        }

        .publication-figure__stage {
            min-height: 8rem;
            padding: 0.45rem;
        }

        .publication-citation__block {
            padding: 1rem;
        }

        .publication-citation button {
            position: static;
            margin-top: 1rem;
        }
    }
</style>
