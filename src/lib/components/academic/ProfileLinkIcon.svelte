<script lang="ts">
    export let label: string;

    $: iconType = label.toLowerCase();
</script>

{#if iconType === "github"}
    <svg class="filled-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .8a11.3 11.3 0 0 0-3.57 22c.57.1.78-.25.78-.55v-2.12c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.68 1.25 3.33.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.17 1.19a11 11 0 0 1 5.77 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .8Z" />
    </svg>
{:else if iconType === "linkedin"}
    <svg class="filled-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
    </svg>
{:else}
    <svg viewBox="0 0 24 24" aria-hidden="true">
        {#if iconType === "email"}
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
        {:else if iconType === "google scholar"}
            <path d="m3 9 9-5 9 5-9 5-9-5Z" />
            <path d="M7 11.25v4.05c0 1.5 2.2 2.7 5 2.7s5-1.2 5-2.7v-4.05" />
            <path d="M21 9v5" />
        {:else}
            <path d="M6 3h8l4 4v14H6z" />
            <path d="M14 3v5h5M9 13h6M9 17h5" />
        {/if}
    </svg>
{/if}

<style>
    svg {
        width: 1.48rem;
        height: 1.48rem;
        display: block;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 1.55;
    }

    .filled-icon {
        fill: currentColor;
        stroke: none;
    }
</style>
