<script lang="ts">
    import type { ResearchAuthor } from "$lib/interfaces/academic";

    export let author: ResearchAuthor;
</script>

{#if author.href}
    <a
        class:profile-owner={author.isProfileOwner}
        href={author.href}
        target="_blank"
        rel="noreferrer">{author.name}</a
    >
{:else if author.isProfileOwner}
    <strong class="profile-owner">{author.name}</strong>
{:else}
    <span>{author.name}</span>
{/if}

<style>
    a {
        color: inherit;
        text-decoration-color: var(--border-strong);
        text-decoration-thickness: 1px;
        text-underline-offset: 0.18rem;
    }

    a:hover {
        color: var(--accent-strong);
        text-decoration-color: currentColor;
    }

    .profile-owner {
        padding: 0.08rem 0.3rem;
        border-radius: 0.25rem;
        background: var(--accent-soft);
        box-decoration-break: clone;
        color: var(--accent-strong);
        font-weight: 800;
        text-decoration: none;
        -webkit-box-decoration-break: clone;
    }
</style>
