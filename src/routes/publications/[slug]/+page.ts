import { error } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types";
import { selectedResearch } from "$lib/data/academic-profile";

export const entries: EntryGenerator = () => selectedResearch.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
    const publication = selectedResearch.find(({ slug }) => slug === params.slug);

    if (!publication) {
        throw error(404, "Publication not found");
    }

    return { publication };
};
