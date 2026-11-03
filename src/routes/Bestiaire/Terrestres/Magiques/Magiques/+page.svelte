<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "invocation",
          "text": "[[Invocation]]",
          "level": 1
      },
      {
          "id": "elmentaire",
          "text": "[[Elémentaire]]",
          "level": 1
      },
      {
          "id": "mimics",
          "text": "[[Mimics]]",
          "level": 1
      },
      {
          "id": "draconide",
          "text": "[[Draconide]]",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Magiques"}</title>
  <meta name="description" content={"Invocation Elémentaire Mimics Draconide"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Magiques"} />
  <meta property="og:description" content={"Invocation Elémentaire Mimics Draconide"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Magiques"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h1 data-heading=\"[[Invocation]]\" dir=\"auto\" id=\"invocation\">Invocation</h1>\n<h1 data-heading=\"[[Elémentaire]]\" dir=\"auto\" id=\"elmentaire\">Elémentaire</h1>\n<h1 data-heading=\"[[Mimics]]\" dir=\"auto\" id=\"mimics\">Mimics</h1>\n<h1 data-heading=\"[[Draconide]]\" dir=\"auto\" id=\"draconide\">Draconide</h1>"}
  </div>
</article>

<LinkPreview />
