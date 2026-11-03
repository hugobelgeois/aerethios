<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Points de cinématique"}</title>
  <meta name="description" content={"Le joueur peut utiliser ce point pour décrire son action qui touche Selon la description, le mj détermine le dé de dégâts et les effets"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Points de cinématique"} />
  <meta property="og:description" content={"Le joueur peut utiliser ce point pour décrire son action qui touche Selon la description, le mj détermine le dé de dégâts et les effets"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Points de cinématique"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<p dir=\"auto\">Le joueur peut utiliser ce point pour décrire son action qui touche<br>\nSelon la description, le mj détermine le dé de dégâts et les effets</p>"}
  </div>
</article>

<LinkPreview />
