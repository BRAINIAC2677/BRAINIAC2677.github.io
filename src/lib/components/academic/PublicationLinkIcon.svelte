<script lang="ts">
    export let label: string;

    $: linkType = label.toLowerCase();
</script>

<svg viewBox="0 0 24 24" aria-hidden="true">
    {#if linkType === "code"}
        <path d="m8.5 8-4 4 4 4" />
        <path d="m15.5 8 4 4-4 4" />
        <path d="m14 5-4 14" />
    {:else if linkType === "project"}
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18" />
        <path d="M7 6h.01M10 6h.01" />
    {:else if linkType === "arxiv" || linkType === "archive"}
        <path d="M4 7h16v13H4z" />
        <path d="m3 4 1-1h16l1 1v3H3z" />
        <path d="M9 11h6" />
    {:else if linkType === "view details"}
        <path d="M5 4h14v16H5z" />
        <path d="M8 9h8M8 13h8M8 17h5" />
    {:else}
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h6M9 17h5" />
    {/if}
</svg>

<style>
    svg {
        width: 1rem;
        height: 1rem;
        display: block;
        flex: 0 0 auto;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 1.65;
    }
</style>
