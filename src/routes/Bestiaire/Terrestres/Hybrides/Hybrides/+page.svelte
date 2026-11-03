<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "mutations--maladies",
          "text": "[[Mutations]] / Maladies",
          "level": 1
      },
      {
          "id": "evolutifs",
          "text": "[[Evolutifs]]",
          "level": 1
      },
      {
          "id": "symbiotiques",
          "text": "[[Symbiotiques]]",
          "level": 1
      },
      {
          "id": "hommes-btes",
          "text": "[[Hommes-bêtes]]",
          "level": 1
      },
      {
          "id": "chimres",
          "text": "[[Chimères]]",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Hybrides"}</title>
  <meta name="description" content={"Définit les créatures ayant des origines venant d'au moins 2 espèces différentes. Mutations / Maladies Vampire Evolutifs Naga Symbiotiques Hommes-bêtes Chimères"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Hybrides"} />
  <meta property="og:description" content={"Définit les créatures ayant des origines venant d'au moins 2 espèces différentes. Mutations / Maladies Vampire Evolutifs Naga Symbiotiques Hommes-bêtes Chimères"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Hybrides"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Définit les créatures ayant des origines venant d'au moins 2 espèces différentes.</p>\n</blockquote>\n<h1 data-heading=\"[[Mutations]] / Maladies\" dir=\"auto\" id=\"mutations--maladies\">Mutations / Maladies</h1>\n<ul>\n<li dir=\"auto\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Hybrides/Vampire\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Hybrides/Vampire\" data-wiki-fragment=\"\">Vampire</a></li>\n</ul>\n<h1 data-heading=\"[[Evolutifs]]\" dir=\"auto\" id=\"evolutifs\">Evolutifs</h1>\n<ul>\n<li dir=\"auto\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Hybrides/Naga\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Hybrides/Naga\" data-wiki-fragment=\"\">Naga</a></li>\n</ul>\n<h1 data-heading=\"[[Symbiotiques]]\" dir=\"auto\" id=\"symbiotiques\">Symbiotiques</h1>\n<h1 data-heading=\"[[Hommes-bêtes]]\" dir=\"auto\" id=\"hommes-btes\">Hommes-bêtes</h1>\n<h1 data-heading=\"[[Chimères]]\" dir=\"auto\" id=\"chimres\">Chimères</h1>")}
  </div>
</article>

<LinkPreview />
