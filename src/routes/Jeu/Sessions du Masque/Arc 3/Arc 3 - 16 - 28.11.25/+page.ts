import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Arc 3 - 16 - 28.11.25",
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
      "id": "5-chlorys-vient-sexcuser",
      "text": "5) Chlorys vient s'excuser",
      "level": 4
    },
    {
      "id": "6-le-vol-de-raja",
      "text": "6) Le vol de Raja",
      "level": 4
    },
    {
      "id": "joueurs",
      "text": "Joueurs",
      "level": 2
    }
  ],
});
