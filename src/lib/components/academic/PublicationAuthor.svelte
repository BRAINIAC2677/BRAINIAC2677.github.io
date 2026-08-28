<script lang="ts">
    import type { ResearchAuthor } from "$lib/interfaces/academic";

    export let author: ResearchAuthor;
    export let showAffiliations = false;
</script>

{#if author.href}
    <a
        class:profile-owner={author.isProfileOwner}
        href={author.href}
        target="_blank"
        rel="noreferrer">{author.name}{author.hasEqualContribution ? "*" : ""}</a
    >
{:else if author.isProfileOwner}
    <strong class="profile-owner">{author.name}{author.hasEqualContribution ? "*" : ""}</strong>
{:else}
    <span>{author.name}{author.hasEqualContribution ? "*" : ""}</span>
{/if}
{#if showAffiliations && author.affiliationIndices?.length}
    <sup>{author.affiliationIndices.join(",")}</sup>
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

    sup {
        margin-left: 0.12em;
        color: var(--accent-strong);
        font-size: 0.72em;
        font-weight: 800;
        line-height: 0;
    }
</style>
