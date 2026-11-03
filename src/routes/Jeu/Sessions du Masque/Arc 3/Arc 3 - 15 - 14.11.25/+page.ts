import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 3 - 15 - 14.11.25",
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
      "id": "scenario",
      "text": "Scénario",
      "level": 2
    },
    {
      "id": "notes",
      "text": "Notes",
      "level": 2
    },
    {
      "id": "rappel-chlorys-leur-donne-des-infos-sur-shara-ishvalda",
      "text": "Rappel) Chlorys leur donne des infos sur Shara Ishvalda",
      "level": 4
    },
    {
      "id": "1-dara-apprend-quon-a-vole-son-stock",
      "text": "1) Dara apprend qu'on a volé son stock",
      "level": 4
    },
    {
      "id": "2-recherche-des-voleurs",
      "text": "2) Recherche des voleurs",
      "level": 4
    },
    {
      "id": "3-confrontation-groupe-platine",
      "text": "3) Confrontation groupe platine",
      "level": 4
    },
    {
      "id": "4-les-gardes-les-arretent-pour-comportement-dangereux",
      "text": "4) Les gardes les arrêtent pour comportement dangereux",
      "level": 4
    },
    {
      "id": "joueurs",
      "text": "Joueurs",
      "level": 2
    }
  ],
});
