<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "ange",
          "text": "[[Ange]]",
          "level": 1
      },
      {
          "id": "dmon",
          "text": "[[Démon]]",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Mythiques"}</title>
  <meta name="description" content={"Définit les entités dont les pouvoirs peuvent côtoyer celui des dieux. issus des dieux ou de la Fracture Ange Démon"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Mythiques"} />
  <meta property="og:description" content={"Définit les entités dont les pouvoirs peuvent côtoyer celui des dieux. issus des dieux ou de la Fracture Ange Démon"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Mythiques"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<p dir=\"auto\">Définit les entités dont les pouvoirs peuvent côtoyer celui des dieux.<br>\nissus des dieux ou de la Fracture</p>\n<h1 data-heading=\"[[Ange]]\" dir=\"auto\" id=\"ange\">Ange</h1>\n<h1 data-heading=\"[[Démon]]\" dir=\"auto\" id=\"dmon\">Démon</h1>"}
  </div>
</article>

<LinkPreview />
