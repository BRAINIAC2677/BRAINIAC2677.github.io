<script lang="ts">
    import portrait from "$lib/images/academic-portrait.jpeg";
    import type { AcademicProfile } from "$lib/interfaces/academic";
    import AcademicLink from "$lib/components/academic/AcademicLink.svelte";
    import WanderingLine from "$lib/components/academic/WanderingLine.svelte";

    export let profile: AcademicProfile;
</script>

<section id="top" class="profile page-shell">
    <div class="profile__introduction">
        <p class="profile__role">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p class="profile__affiliation">{profile.affiliation}</p>
        <p class="profile__availability">{profile.status}</p>

        <div class="profile__biography">
            {#each profile.biography as paragraph}
                <p>
                    {#each paragraph as part}
                        {#if part.href}
                            <AcademicLink href={part.href} tone="accent">{part.text}</AcademicLink>
                        {:else}
                            {part.text}
                        {/if}
                    {/each}
                </p>
            {/each}
        </div>

        <nav class="profile__links" aria-label="Primary profile links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <AcademicLink href={profile.scholarUrl} tone="accent">Google Scholar</AcademicLink>
            {#each profile.links as link}
                <AcademicLink href={link.href} tone="accent">{link.label}</AcademicLink>
            {/each}
            <AcademicLink href={profile.cvUrl} tone="accent">CV</AcademicLink>
        </nav>
    </div>

    <aside class="profile__aside">
        <figure>
            <img src={portrait} alt="Asif Azad" />
        </figure>
        <WanderingLine />
    </aside>
</section>

<style>
    .profile {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 14.5rem;
        gap: clamp(2.5rem, 7vw, 5.5rem);
        align-items: start;
        padding-top: clamp(2.75rem, 6vw, 4.5rem);
    }

    .profile__role {
        color: var(--accent);
        font-size: 0.69rem;
        font-weight: 700;
        letter-spacing: 0.11em;
        text-transform: uppercase;
    }

    h1 {
        margin-top: 0.55rem;
        font-family: var(--font-display);
        font-size: clamp(3.5rem, 7vw, 5.25rem);
        font-weight: 500;
        letter-spacing: -0.055em;
        line-height: 0.92;
    }

    .profile__affiliation {
        margin-top: 0.75rem;
        color: var(--muted);
        font-size: 0.77rem;
        font-weight: 600;
    }

    .profile__availability {
        margin-top: 0.38rem;
        color: var(--muted-strong);
        font-size: 0.72rem;
        font-weight: 600;
    }

    .profile__biography {
        display: grid;
        gap: 0.65rem;
        margin-top: 1.4rem;
        padding-top: 1.1rem;
        border-top: 1px solid var(--border-strong);
    }

    .profile__biography p {
        max-width: 49rem;
        color: var(--muted-strong);
        font-size: 0.85rem;
        line-height: 1.7;
    }

    .profile__links {
        display: flex;
        gap: 0.65rem 1.1rem;
        flex-wrap: wrap;
        margin-top: 1.05rem;
        font-size: 0.7rem;
        font-weight: 700;
    }

    .profile__links > a {
        color: var(--accent-strong);
        text-decoration-color: color-mix(in srgb, var(--accent) 45%, transparent);
        text-underline-offset: 0.22rem;
    }

    .profile__aside {
        display: grid;
        gap: 2rem;
        align-items: start;
    }

    figure {
        margin: 0;
    }

    figure img {
        width: 100%;
        aspect-ratio: 1;
        display: block;
        border-radius: 50%;
        object-fit: cover;
        object-position: 50% 34%;
        filter: saturate(0.9);
        box-shadow: 0 0.8rem 2.5rem color-mix(in srgb, black 24%, transparent);
    }

    @media (max-width: 700px) {
        .profile {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .profile__aside {
            grid-row: 1;
            width: 100%;
            max-width: 22rem;
            grid-template-columns: minmax(8.75rem, 11.5rem) minmax(0, 1fr);
            gap: 1.6rem;
            align-items: center;
        }

        .profile__introduction {
            grid-row: 2;
        }
    }
</style>
