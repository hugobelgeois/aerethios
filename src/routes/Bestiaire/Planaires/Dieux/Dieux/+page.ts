import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = () => ({
  pageTitle: "Dieux",
  pageDescription: "",
  fullBleed: false,
  fullHeight: false,
  headings: [
    {
      "id": "gamesh-dieu-scintillant",
      "text": "[[Gamesh, Dieu Scintillant]]",
      "level": 2
    },
    {
      "id": "aerel-grande-mere",
      "text": "[[Aerel, Grande Mère]]",
      "level": 2
    },
    {
      "id": "radeon-dieu-dormant",
      "text": "[[Radeon, Dieu Dormant]]",
      "level": 2
    },
    {
      "id": "obel-dieu-affame",
      "text": "[[Obel, Dieu Affamé]]",
      "level": 2
    },
    {
      "id": "kira-dieu-pourpre",
      "text": "[[Kira, Dieu Pourpre]]",
      "level": 2
    },
    {
      "id": "imet-dieu-patient",
      "text": "[[Imet, Dieu Patient]]",
      "level": 2
    }
  ],
});
