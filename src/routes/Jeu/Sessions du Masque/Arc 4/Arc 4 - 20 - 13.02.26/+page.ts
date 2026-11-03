import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 4 - 20 - 13.02.26",
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
      "id": "1-accroche",
      "text": "1) Accroche",
      "level": 4
    },
    {
      "id": "2-les-mechas-deviennent-instables",
      "text": "2) Les mechas deviennent instables",
      "level": 4
    },
    {
      "id": "3-combat-troll",
      "text": "3) Combat Troll",
      "level": 4
    },
    {
      "id": "4-exploitation-des-nains",
      "text": "4) Exploitation des nains",
      "level": 4
    },
    {
      "id": "5-pistage-de-la-creature",
      "text": "5) Pistage de la créature",
      "level": 4
    },
    {
      "id": "6-combat-wyrm-",
      "text": "6) Combat Wyrm ?",
      "level": 4
    },
    {
      "id": "7-les-joueurs-sont-recherches",
      "text": "7) Les joueurs sont recherchés",
      "level": 4
    },
    {
      "id": "8-le-masque-",
      "text": "8) Le masque ?",
      "level": 4
    },
    {
      "id": "joueurs",
      "text": "Joueurs",
      "level": 2
    }
  ],
});
