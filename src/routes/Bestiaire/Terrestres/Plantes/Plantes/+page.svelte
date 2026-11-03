<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "fixes",
          "text": "Fixées",
          "level": 1
      },
      {
          "id": "animes",
          "text": "Animées",
          "level": 1
      },
      {
          "id": "parasites",
          "text": "Parasites",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Plantes"}</title>
  <meta name="description" content={"Définit les créatures dont le sang est remplacé par de la sève (entre autre) et qui ne possèdent pas d'organes. Fixées agissent lentement, ex. carnivores, lianes constricteurs Animées formes animales…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Plantes"} />
  <meta property="og:description" content={"Définit les créatures dont le sang est remplacé par de la sève (entre autre) et qui ne possèdent pas d'organes. Fixées agissent lentement, ex. carnivores, lianes constricteurs Animées formes animales…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Plantes"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<p dir=\"auto\">Définit les créatures dont le sang est remplacé par de la sève (entre autre) et qui ne possèdent pas d'organes.</p>\n<h1 data-heading=\"Fixées\" dir=\"auto\" id=\"fixes\">Fixées</h1>\n<p dir=\"auto\">agissent lentement, ex. carnivores, lianes constricteurs</p>\n<h1 data-heading=\"Animées\" dir=\"auto\" id=\"animes\">Animées</h1>\n<p dir=\"auto\">formes animales ou humanoïdes, ex. homme-champignon, dryades</p>\n<h1 data-heading=\"Parasites\" dir=\"auto\" id=\"parasites\">Parasites</h1>"}
  </div>
</article>

<LinkPreview />
