<script lang="ts">
    import type { AcademicUpdate } from "$lib/interfaces/academic";
    import AcademicLink from "$lib/components/academic/AcademicLink.svelte";
    import SectionHeading from "$lib/components/academic/SectionHeading.svelte";

    export let updates: AcademicUpdate[];
</script>

<section id="news" class="news page-section page-shell">
    <SectionHeading eyebrow="Updates" title="Selected news" />

    <div class="news-list">
        {#each updates as update}
            <article class="news-item">
                <time>{update.date}</time>
                <span class="news-item__category">{update.category}</span>
                <p>
                    {#each update.content as part}
                        {#if part.href}
                            <AcademicLink href={part.href} tone="accent">{part.text}</AcademicLink>
                        {:else}
                            {part.text}
                        {/if}
                    {/each}
                </p>
            </article>
        {/each}
    </div>
</section>

<style>
    .news {
        padding-top: clamp(2.75rem, 4.5vw, 4rem);
    }

    .news-list {
        border-top: 1px solid var(--border-strong);
    }

    .news-item {
        display: grid;
        grid-template-columns: 6.5rem 7rem minmax(0, 1fr);
        gap: 1.5rem;
        align-items: center;
        padding: 0.7rem 0;
        border-bottom: 1px solid var(--border);
    }

    time {
        color: var(--muted);
        font-size: 0.66rem;
        font-weight: 700;
        letter-spacing: 0.04em;
    }

    .news-item__category {
        width: fit-content;
        padding: 0.22rem 0.48rem;
        border: 1px solid color-mix(in srgb, var(--accent) 24%, transparent);
        border-radius: 999px;
        background: var(--accent-soft);
        color: var(--accent-strong);
        font-size: 0.57rem;
        font-weight: 800;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }

    p {
        color: var(--muted-strong);
        font-size: 0.75rem;
        line-height: 1.55;
    }

    @media (max-width: 560px) {
        .news-item {
            grid-template-columns: 5.25rem 1fr;
            gap: 0.45rem 0.75rem;
        }

        .news-item p {
            grid-column: 1 / -1;
        }
    }
</style>
