<script lang="ts">
    export let description = "";
    export let eyebrow: string;
    export let title: string;
</script>

<header class="section-heading">
    <p class="section-eyebrow">{eyebrow}</p>
    <div class="section-heading__content">
        <h2>{title}</h2>
        {#if description}
            <p>{description}</p>
        {/if}
    </div>
</header>

<style>
    .section-heading {
        display: grid;
        grid-template-columns: 9rem 1fr;
        gap: clamp(1.5rem, 4vw, 3rem);
        margin-bottom: 1.4rem;
    }

    .section-heading__content {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        align-items: end;
    }

    h2 {
        font-family: var(--font-display);
        font-size: clamp(1.9rem, 3.5vw, 2.65rem);
        font-weight: 500;
        letter-spacing: -0.04em;
        line-height: 1;
    }

    .section-heading__content p {
        max-width: 31rem;
        color: var(--muted);
        font-size: 0.82rem;
        line-height: 1.65;
    }

    @media (max-width: 760px) {
        .section-heading {
            grid-template-columns: 1fr;
            gap: 0.8rem;
        }

        .section-heading__content {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.8rem;
        }
    }
</style>
