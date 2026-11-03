import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Conditions",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "aveugle",
      "text": "Aveugle",
      "level": 2
    },
    {
      "id": "charme",
      "text": "Charmé",
      "level": 2
    },
    {
      "id": "assourdi",
      "text": "Assourdi",
      "level": 2
    },
    {
      "id": "epuisement",
      "text": "Épuisement",
      "level": 2
    },
    {
      "id": "effraye",
      "text": "Effrayé",
      "level": 2
    },
    {
      "id": "attrape",
      "text": "Attrapé",
      "level": 2
    },
    {
      "id": "incapacite",
      "text": "Incapacité",
      "level": 2
    },
    {
      "id": "invisible",
      "text": "Invisible",
      "level": 2
    },
    {
      "id": "paralyse",
      "text": "Paralysé",
      "level": 2
    },
    {
      "id": "petrifie",
      "text": "Pétrifié",
      "level": 2
    },
    {
      "id": "couche",
      "text": "Couché",
      "level": 2
    },
    {
      "id": "retenu",
      "text": "Retenu",
      "level": 2
    },
    {
      "id": "abasourdi",
      "text": "Abasourdi",
      "level": 2
    },
    {
      "id": "inconscient",
      "text": "Inconscient",
      "level": 2
    }
  ],
});
