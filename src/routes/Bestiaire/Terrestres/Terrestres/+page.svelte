<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "humanodes",
          "text": "[[Humanoïdes]]",
          "level": 1
      },
      {
          "id": "hybrides",
          "text": "[[Hybrides]]",
          "level": 1
      },
      {
          "id": "magiques",
          "text": "[[Magiques]]",
          "level": 1
      },
      {
          "id": "mythiques",
          "text": "[[Mythiques]]",
          "level": 1
      },
      {
          "id": "naturels",
          "text": "[[Naturels]]",
          "level": 1
      },
      {
          "id": "plantes",
          "text": "[[Plantes]]",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Terrestres"}</title>
  <meta name="description" content={"Humanoïdes Hybrides Magiques Mythiques Naturels Plantes"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Terrestres"} />
  <meta property="og:description" content={"Humanoïdes Hybrides Magiques Mythiques Naturels Plantes"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Terrestres"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<h1 data-heading=\"[[Humanoïdes]]\" dir=\"auto\" id=\"humanodes\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Humanoides/Humanoides\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Humanoides/Humanoides\" data-wiki-fragment=\"\">Humanoïdes</a></h1>\n<h1 data-heading=\"[[Hybrides]]\" dir=\"auto\" id=\"hybrides\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Hybrides/Hybrides\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Hybrides/Hybrides\" data-wiki-fragment=\"\">Hybrides</a></h1>\n<h1 data-heading=\"[[Magiques]]\" dir=\"auto\" id=\"magiques\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Magiques/Magiques\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Magiques/Magiques\" data-wiki-fragment=\"\">Magiques</a></h1>\n<h1 data-heading=\"[[Mythiques]]\" dir=\"auto\" id=\"mythiques\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Mythiques/Mythiques\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Mythiques/Mythiques\" data-wiki-fragment=\"\">Mythiques</a></h1>\n<h1 data-heading=\"[[Naturels]]\" dir=\"auto\" id=\"naturels\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Naturels/Naturels\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Naturels/Naturels\" data-wiki-fragment=\"\">Naturels</a></h1>\n<h1 data-heading=\"[[Plantes]]\" dir=\"auto\" id=\"plantes\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Plantes/Plantes\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Plantes/Plantes\" data-wiki-fragment=\"\">Plantes</a></h1>")}
  </div>
</article>

<LinkPreview />
