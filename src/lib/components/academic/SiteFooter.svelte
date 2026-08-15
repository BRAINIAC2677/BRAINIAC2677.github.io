<script lang="ts">
    import type { AcademicProfile } from "$lib/interfaces/academic";
    import AcademicLink from "$lib/components/academic/AcademicLink.svelte";

    export let profile: AcademicProfile;
</script>

<footer id="contact" class="site-footer">
    <div class="page-shell site-footer__inner">
        <div>
            <p class="section-eyebrow">Contact</p>
            <h2>Let’s talk research.</h2>
            <a class="site-footer__email" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>

        <nav class="site-footer__links" aria-label="Profile links">
            {#each profile.links as link}
                <AcademicLink href={link.href} tone="accent">{link.label}</AcademicLink>
            {/each}
            <AcademicLink href={profile.scholarUrl} tone="accent">Google Scholar</AcademicLink>
            <AcademicLink href={profile.cvUrl} tone="accent">Curriculum vitae</AcademicLink>
        </nav>

        <div class="site-footer__meta">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <a href="#top">Back to top ↑</a>
        </div>
    </div>
</footer>

<style>
    .site-footer {
        scroll-margin-top: 4rem;
        margin-top: clamp(2.5rem, 5vw, 4rem);
        border-top: 1px solid var(--border-strong);
        background: var(--surface);
    }

    .site-footer__inner {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 2rem;
        padding-top: 2.25rem;
        padding-bottom: 1.25rem;
    }

    h2 {
        margin-top: 0.65rem;
        font-family: var(--font-display);
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 500;
        letter-spacing: -0.04em;
        line-height: 1;
    }

    .site-footer__email {
        display: inline-block;
        margin-top: 1rem;
        color: var(--muted-strong);
        font-size: 0.78rem;
        text-decoration-color: var(--accent);
        text-underline-offset: 0.3rem;
    }

    .site-footer__links {
        display: grid;
        gap: 0.55rem;
        align-content: end;
        justify-items: end;
        font-size: 0.68rem;
    }

    .site-footer__meta a {
        color: var(--accent-strong);
        font-size: 0.68rem;
        font-weight: 700;
        text-decoration: none;
    }

    .site-footer__meta {
        grid-column: 1 / -1;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding-top: 1.25rem;
        border-top: 1px solid var(--border);
        color: var(--muted);
        font-size: 0.62rem;
    }

    @media (max-width: 640px) {
        .site-footer__inner {
            grid-template-columns: 1fr;
        }

        .site-footer__links {
            justify-items: start;
        }

        .site-footer__meta {
            grid-column: auto;
            flex-direction: column;
        }
    }
</style>
