<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "bte",
          "text": "[[Bête]]",
          "level": 1
      },
      {
          "id": "insectode",
          "text": "[[Insectoïde]]",
          "level": 1
      },
      {
          "id": "ncrophages",
          "text": "[[Nécrophages]]",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Naturels"}</title>
  <meta name="description" content={"Toutes les créatures qui existent dans le vrai monde mais dont la taille peut avoir été modifiée Bête Insectoïde Nécrophages"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Naturels"} />
  <meta property="og:description" content={"Toutes les créatures qui existent dans le vrai monde mais dont la taille peut avoir été modifiée Bête Insectoïde Nécrophages"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Naturels"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<p dir=\"auto\">Toutes les créatures qui existent dans le vrai monde mais dont la taille peut avoir été modifiée</p>\n<h1 data-heading=\"[[Bête]]\" dir=\"auto\" id=\"bte\">Bête</h1>\n<h1 data-heading=\"[[Insectoïde]]\" dir=\"auto\" id=\"insectode\">Insectoïde</h1>\n<h1 data-heading=\"[[Nécrophages]]\" dir=\"auto\" id=\"ncrophages\">Nécrophages</h1>"}
  </div>
</article>

<LinkPreview />
