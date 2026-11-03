import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 4 - 18 - 02.01.26",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "details",
      "text": "Détails",
      "level": 2
    },
    {
      "id": "notes",
      "text": "Notes",
      "level": 2
    },
    {
      "id": "scenario",
      "text": "Scénario",
      "level": 2
    },
    {
      "id": "1-billy-et-les-dieux",
      "text": "1) Billy et les Dieux",
      "level": 4
    },
    {
      "id": "2-combat-contre-un-dieu",
      "text": "2) Combat contre un Dieu",
      "level": 4
    },
    {
      "id": "3-presentation-des-templis",
      "text": "3) Présentation des Templis",
      "level": 4
    },
    {
      "id": "4-trouver-le-gobelin",
      "text": "4) Trouver le gobelin",
      "level": 4
    },
    {
      "id": "5-abattre-le-gobelin",
      "text": "5) Abattre le gobelin",
      "level": 4
    },
    {
      "id": "6-retrouver-syrithia",
      "text": "6) Retrouver Syrithia",
      "level": 4
    },
    {
      "id": "joueurs",
      "text": "Joueurs",
      "level": 2
    }
  ],
});
