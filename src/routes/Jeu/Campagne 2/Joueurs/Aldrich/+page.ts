import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Aldrich",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "attributs",
      "text": "Attributs",
      "level": 2
    },
    {
      "id": "combat",
      "text": "Combat",
      "level": 3
    },
    {
      "id": "magie",
      "text": "Magie",
      "level": 3
    },
    {
      "id": "competences",
      "text": "Compétences",
      "level": 2
    },
    {
      "id": "equipement",
      "text": "Equipement",
      "level": 2
    },
    {
      "id": "armes-de-melees---newarmes-de-melee--armes-a-distances---newarmes-a-distance",
      "text": "[[Armes de mêlées - New|Armes de Mêlée]] | [[Armes à distances - New|Armes à Distance]]",
      "level": 3
    },
    {
      "id": "armures---new",
      "text": "[[Armures - New]]",
      "level": 3
    },
    {
      "id": "apprentissages---new",
      "text": "[[Apprentissages - New]]",
      "level": 2
    },
    {
      "id": "inventaire",
      "text": "Inventaire",
      "level": 2
    },
    {
      "id": "notes",
      "text": "Notes",
      "level": 2
    },
    {
      "id": "histoire",
      "text": "Histoire",
      "level": 3
    },
    {
      "id": "etape-0--inspiration",
      "text": "Étape 0 : Inspiration",
      "level": 3
    }
  ],
});
