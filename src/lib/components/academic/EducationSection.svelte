<script lang="ts">
    import type { Education, Honor } from "$lib/interfaces/academic";
    import SectionHeading from "$lib/components/academic/SectionHeading.svelte";

    export let education: Education[];
    export let honors: Honor[];
</script>

<section id="education" class="page-section page-shell">
    <SectionHeading
        eyebrow="Background"
        title="Education & honors"
        description="Academic training and selected distinctions in research, scholarship, and technical leadership."
    />

    <div class="academic-record">
        <div>
            <h3 class="record-label">Education</h3>
            <div class="education-list">
                {#each education as item}
                    <article class="education-item">
                        <span class="education-item__period">{item.period}</span>
                        <div>
                            <h4>{item.institution}</h4>
                            <p class="education-item__degree">{item.degree}</p>
                            <p class="education-item__details">{item.details.join(" · ")}</p>
                        </div>
                    </article>
                {/each}
            </div>
        </div>

        <div>
            <h3 class="record-label">Selected honors</h3>
            <div class="honors-list">
                {#each honors as honor}
                    <article class="honor">
                        <span>{honor.year}</span>
                        <div>
                            <h4>{honor.title}</h4>
                            <p>{honor.detail}</p>
                        </div>
                    </article>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .academic-record {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
        gap: clamp(2.5rem, 7vw, 5.5rem);
        padding-top: 0.25rem;
    }

    .record-label {
        margin-bottom: 0.65rem;
        color: var(--muted);
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .education-list,
    .honors-list {
        border-top: 1px solid var(--border-strong);
    }

    .education-item {
        display: grid;
        grid-template-columns: 5.5rem 1fr;
        gap: 1.25rem;
        padding: 1rem 0;
        border-bottom: 1px solid var(--border);
    }

    .education-item__period,
    .honor > span {
        padding-top: 0.12rem;
        color: var(--accent);
        font-size: 0.64rem;
        font-weight: 700;
    }

    h4 {
        font-family: var(--font-display);
        font-size: 1.13rem;
        font-weight: 600;
        letter-spacing: -0.015em;
        line-height: 1.15;
    }

    .education-item__degree {
        margin-top: 0.32rem;
        color: var(--muted-strong);
        font-size: 0.7rem;
        font-weight: 600;
        line-height: 1.45;
    }

    .education-item__details,
    .honor p {
        margin-top: 0.3rem;
        color: var(--muted);
        font-size: 0.66rem;
        line-height: 1.5;
    }

    .honor {
        display: grid;
        grid-template-columns: 4rem 1fr;
        gap: 1rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--border);
    }

    .honor h4 {
        font-size: 1rem;
    }

    @media (max-width: 760px) {
        .academic-record {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 440px) {
        .education-item {
            grid-template-columns: 1fr;
            gap: 0.35rem;
        }
    }
</style>
