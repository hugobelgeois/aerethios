import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Maîtrises",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "debloquer",
      "text": "Débloquer",
      "level": 2
    },
    {
      "id": "maitrise-darmes",
      "text": "Maîtrise d'armes",
      "level": 3
    },
    {
      "id": "magie",
      "text": "Magie",
      "level": 3
    },
    {
      "id": "ameliorer",
      "text": "Améliorer",
      "level": 2
    },
    {
      "id": "maitrise-darme-et-de-magie",
      "text": "Maîtrise d’Arme et de Magie",
      "level": 3
    },
    {
      "id": "magie-1",
      "text": "Magie",
      "level": 3
    }
  ],
});
