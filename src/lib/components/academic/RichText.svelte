<script lang="ts">
    import type { RichTextPart } from "$lib/interfaces/academic";
    import AcademicLink from "$lib/components/academic/AcademicLink.svelte";

    export let parts: RichTextPart[];
</script>

{#each parts as part}
    {#if part.href}
        <AcademicLink href={part.href} tone="accent">{part.text}</AcademicLink>
    {:else if part.isEmphasized}
        <strong>{part.text}</strong>
    {:else}
        {part.text}
    {/if}
{/each}
