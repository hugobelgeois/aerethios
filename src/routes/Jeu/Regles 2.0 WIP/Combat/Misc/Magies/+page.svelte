<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "magies",
          "text": "Magies",
          "level": 3
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Magies"}</title>
  <meta name="description" content={"Magies Permet d'imprégner l'arme de sa magie (coûte 1 crystal). Ajoute temporairement le type d'une magie aux types de dégâts de l'arme (dure 1 combat et n'est pas cumulable)"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Magies"} />
  <meta property="og:description" content={"Magies Permet d'imprégner l'arme de sa magie (coûte 1 crystal). Ajoute temporairement le type d'une magie aux types de dégâts de l'arme (dure 1 combat et n'est pas cumulable)"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Magies"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h3 data-heading=\"Magies\" dir=\"auto\" id=\"magies\">Magies</h3>\n<blockquote dir=\"auto\">\n<p>Permet d'imprégner l'arme de sa magie (coûte 1 crystal).</p>\n</blockquote>\n<p dir=\"auto\">Ajoute temporairement le type d'une magie aux types de dégâts de l'arme (dure 1 combat et n'est pas cumulable)</p>"}
  </div>
</article>

<LinkPreview />
