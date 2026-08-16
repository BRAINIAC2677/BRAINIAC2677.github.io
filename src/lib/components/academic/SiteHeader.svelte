<script lang="ts">
    import logoDark from "$lib/images/logo-dark.png";
    import logoLight from "$lib/images/logo-light.png";
    import ThemeToggle from "$lib/components/academic/ThemeToggle.svelte";

    export let cvUrl = "";
    export let name: string;

    let navigationOpen = false;

    const navigationItems = [
        { href: "#news", label: "News" },
        { href: "#publications", label: "Publications" },
        { href: "#experience", label: "Experience" },
        { href: "#education", label: "Education" },
        { href: "#leadership", label: "Leadership" },
        { href: "#contact", label: "Contact" },
    ];

    function closeNavigation() {
        navigationOpen = false;
    }

    function toggleNavigation() {
        navigationOpen = !navigationOpen;
    }
</script>

<header class="site-header">
    <div class="page-shell site-header__inner">
        <a class="site-wordmark" href="#top" aria-label={name} on:click={closeNavigation}>
            <img class="site-wordmark__logo--dark" src={logoDark} alt="" />
            <img class="site-wordmark__logo--light" src={logoLight} alt="" />
        </a>

        <button
            class="navigation-toggle"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={navigationOpen}
            aria-label="Toggle navigation"
            on:click={toggleNavigation}
        >
            <span></span>
            <span></span>
        </button>

        <nav
            id="primary-navigation"
            class:site-navigation--open={navigationOpen}
            class="site-navigation"
            aria-label="Primary navigation"
        >
            {#each navigationItems as item}
                <a href={item.href} on:click={closeNavigation}>{item.label}</a>
            {/each}
            {#if cvUrl}
                <a href={cvUrl} target="_blank" rel="noreferrer">CV</a>
            {/if}
            <ThemeToggle />
        </nav>
    </div>
</header>

<style>
    .site-header {
        position: sticky;
        top: 0;
        z-index: 30;
        border-bottom: 1px solid color-mix(in srgb, var(--border) 85%, transparent);
        background: color-mix(in srgb, var(--canvas) 90%, transparent);
        backdrop-filter: blur(18px);
    }

    .site-header__inner {
        min-height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .site-wordmark {
        width: 2.6rem;
        height: 2.05rem;
        display: block;
        text-decoration: none;
    }

    .site-wordmark img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: contain;
    }

    .site-wordmark__logo--light {
        display: none !important;
    }

    :global(html[data-theme="light"]) .site-wordmark__logo--dark {
        display: none;
    }

    :global(html[data-theme="light"]) .site-wordmark__logo--light {
        display: block !important;
    }

    .site-navigation {
        display: flex;
        gap: 1.25rem;
        align-items: center;
    }

    .site-navigation a {
        color: var(--muted-strong);
        font-size: 0.72rem;
        font-weight: 600;
        text-decoration: none;
        transition: color 160ms ease;
    }

    .site-navigation a:hover {
        color: var(--accent);
    }

    .navigation-toggle {
        display: none;
        width: 2.35rem;
        height: 2.35rem;
        border: 1px solid var(--border);
        border-radius: 50%;
        background: var(--surface);
    }

    .navigation-toggle span {
        display: block;
        width: 0.95rem;
        height: 1px;
        margin: 0.25rem auto;
        background: var(--ink);
    }

    @media (max-width: 760px) {
        .navigation-toggle {
            display: block;
        }

        .site-navigation {
            position: absolute;
            top: calc(100% + 1px);
            left: 0;
            right: 0;
            display: none;
            padding: 1rem var(--page-gutter) 1.25rem;
            border-bottom: 1px solid var(--border);
            background: var(--canvas);
            flex-direction: column;
            align-items: flex-start;
        }

        .site-navigation--open {
            display: flex;
        }

        .site-navigation a {
            width: 100%;
            padding: 0.3rem 0;
            font-size: 0.9rem;
        }
    }
</style>
