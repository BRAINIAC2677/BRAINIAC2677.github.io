<script lang="ts">
    import { onMount } from "svelte";
    import { MoonOutline, SunOutline } from "flowbite-svelte-icons";

    type Theme = "dark" | "light";

    let theme: Theme = "dark";

    onMount(() => {
        theme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    });

    function applyTheme(nextTheme: Theme) {
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("portfolio-theme", nextTheme);
        updateThemeColor(nextTheme);
    }

    function toggleTheme() {
        theme = theme === "dark" ? "light" : "dark";
        applyTheme(theme);
    }

    function updateThemeColor(nextTheme: Theme) {
        const themeColor = nextTheme === "dark" ? "#1c1c1d" : "#ffffff";
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColor);
    }
</script>

<button
    class="theme-toggle"
    type="button"
    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    on:click={toggleTheme}
>
    {#if theme === "dark"}
        <SunOutline size="sm" aria-hidden="true" />
    {:else}
        <MoonOutline size="sm" aria-hidden="true" />
    {/if}
</button>

<style>
    .theme-toggle {
        width: 2rem;
        height: 2rem;
        display: inline-flex;
        padding: 0;
        border: 0;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: var(--muted-strong);
        transition:
            background-color 160ms ease,
            color 160ms ease;
    }

    .theme-toggle:hover {
        background: var(--surface);
        color: var(--accent);
    }

    @media (max-width: 760px) {
        .theme-toggle {
            margin-top: 0.25rem;
        }
    }
</style>
