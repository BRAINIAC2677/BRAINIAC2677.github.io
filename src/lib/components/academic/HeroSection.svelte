<script lang="ts">
    import portrait from "$lib/images/asif-dp.jpg";
    import type { AcademicProfile } from "$lib/interfaces/academic";
    import AcademicLink from "$lib/components/academic/AcademicLink.svelte";
    import WanderingLine from "$lib/components/academic/WanderingLine.svelte";
    import ProfileLinkIcon from "$lib/components/academic/ProfileLinkIcon.svelte";

    export let profile: AcademicProfile;
</script>

<section id="top" class="profile page-shell">
    <div class="profile__introduction">
        <p class="profile__role">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p class="profile__affiliation">{profile.affiliation}</p>
        <p class="profile__availability">{profile.status}</p>

        <nav class="profile__links" aria-label="Primary profile links">
            <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
                <ProfileLinkIcon label="Email" />
            </a>
            <a
                href={profile.scholarUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Google Scholar"
                title="Google Scholar"
            >
                <ProfileLinkIcon label="Google Scholar" />
            </a>
            {#each profile.links as link}
                <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
                    <ProfileLinkIcon label={link.label} />
                </a>
            {/each}
            <a href={profile.cvUrl} target="_blank" rel="noreferrer" aria-label="CV" title="CV">
                <ProfileLinkIcon label="CV" />
            </a>
        </nav>

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

        <section class="profile__research" aria-labelledby="research-interest-heading">
            <h2 id="research-interest-heading">Research Interest</h2>
            <p>{profile.researchStatement}</p>
            <div class="profile__research-interests" aria-label="Research interest areas">
                {#each profile.researchInterests as interest, index}
                    {#if index > 0}<span aria-hidden="true">·</span>{/if}
                    <strong>{interest}</strong>
                {/each}
            </div>
        </section>

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
        padding-top: clamp(1.45rem, 3vw, 2.35rem);
    }

    .profile__role {
        color: var(--accent);
        font-size: 0.69rem;
        font-weight: 700;
        letter-spacing: 0.11em;
        text-transform: uppercase;
    }

    h1 {
        margin-top: 0.4rem;
        font-family: var(--font-display);
        font-size: clamp(3.5rem, 7vw, 5.25rem);
        font-weight: 500;
        letter-spacing: -0.055em;
        line-height: 0.92;
    }

    .profile__affiliation {
        margin-top: 0.6rem;
        color: var(--muted);
        font-size: 0.77rem;
        font-weight: 600;
    }

    .profile__availability {
        margin-top: 0.3rem;
        color: var(--muted-strong);
        font-size: 0.72rem;
        font-weight: 600;
    }

    .profile__biography {
        display: grid;
        gap: 0.55rem;
        margin-top: 1.05rem;
        padding-top: 0.85rem;
        border-top: 1px solid var(--border-strong);
    }

    .profile__biography p {
        max-width: 49rem;
        color: var(--muted-strong);
        font-size: 0.85rem;
        line-height: 1.64;
    }

    .profile__research {
        margin-top: 0.75rem;
        padding: 0.75rem 0.9rem 0.72rem;
        border-left: 2px solid var(--accent);
        background: color-mix(in srgb, var(--surface) 82%, transparent);
    }

    .profile__research h2 {
        color: var(--accent);
        font-size: 0.66rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }

    .profile__research > p {
        max-width: 49rem;
        margin-top: 0.38rem;
        color: var(--muted-strong);
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1.52;
    }

    .profile__research-interests {
        display: flex;
        gap: 0.4rem 0.75rem;
        flex-wrap: wrap;
        margin-top: 0.5rem;
        padding-top: 0.5rem;
        border-top: 1px solid var(--border);
        align-items: center;
        color: var(--muted-strong);
        font-size: 0.67rem;
        letter-spacing: 0.025em;
        line-height: 1.5;
    }

    .profile__research-interests span {
        color: var(--accent);
    }

    .profile__research-interests strong {
        font-weight: 700;
    }

    .profile__links {
        display: flex;
        gap: 0.62rem;
        flex-wrap: wrap;
        margin-top: 0.8rem;
    }

    .profile__links > a {
        width: 2.8rem;
        height: 2.8rem;
        display: grid;
        place-items: center;
        color: var(--muted-strong);
        text-decoration: none;
        transition:
            color 150ms ease,
            transform 150ms ease;
    }

    .profile__links > a:hover {
        color: var(--accent-strong);
        transform: translateY(-2px);
    }

    .profile__links :global(svg) {
        width: 1.72rem;
        height: 1.72rem;
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
            gap: 1.55rem;
            padding-top: 1.25rem;
        }

        .profile__aside {
            grid-row: 1;
            width: calc(100% + var(--page-gutter));
            max-width: 24rem;
            grid-template-columns: minmax(8.75rem, 10.5rem) minmax(8rem, 1fr);
            gap: 1.6rem;
            align-items: center;
        }

        .profile__introduction {
            grid-row: 2;
        }
    }
</style>
