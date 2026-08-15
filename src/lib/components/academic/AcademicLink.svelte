<script lang="ts">
    export let href: string;
    export let tone: "accent" | "inherit" = "inherit";
</script>

<a class:academic-link--accent={tone === "accent"} {href} target="_blank" rel="noreferrer">
    <slot />
</a>

<style>
    a {
        color: inherit;
        font-weight: 700;
        text-decoration-line: underline;
        text-decoration-color: color-mix(in srgb, currentColor 34%, transparent);
        text-decoration-thickness: 0.065em;
        text-underline-offset: 0.24em;
        transition:
            color 150ms ease,
            text-decoration-color 150ms ease,
            text-decoration-thickness 150ms ease;
    }

    a:hover {
        text-decoration-color: currentColor;
        text-decoration-thickness: 0.1em;
    }

    .academic-link--accent {
        color: var(--accent-strong);
    }
</style>
