<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "vampires",
          "text": "[[Vampires]]",
          "level": 1
      },
      {
          "id": "gobelins",
          "text": "[[Gobelins]]",
          "level": 1
      },
      {
          "id": "esprits",
          "text": "[[Esprits]]",
          "level": 1
      },
      {
          "id": "spectres",
          "text": "[[Spectres]]",
          "level": 1
      },
      {
          "id": "dieux",
          "text": "[[Dieux]]",
          "level": 1
      },
      {
          "id": "possds",
          "text": "[[Possédés]]",
          "level": 1
      },
      {
          "id": "ressuscits",
          "text": "[[Ressuscités]]",
          "level": 1
      },
      {
          "id": "liches",
          "text": "[[Liches]]",
          "level": 1
      },
      {
          "id": "vampires",
          "text": "[[Vampires]]",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Planaires"}</title>
  <meta name="description" content={"Vampires Gobelins Esprits Spectres une âme libre non dangereuse dans cet état Dieux Possédés une âme possède un vivant et remplace son âme Ressuscités une âme récupère son corps d'origine Liches…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Planaires"} />
  <meta property="og:description" content={"Vampires Gobelins Esprits Spectres une âme libre non dangereuse dans cet état Dieux Possédés une âme possède un vivant et remplace son âme Ressuscités une âme récupère son corps d'origine Liches…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Planaires"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<h1 data-heading=\"[[Vampires]]\" dir=\"auto\" id=\"vampires\">Vampires</h1>\n<h1 data-heading=\"[[Gobelins]]\" dir=\"auto\" id=\"gobelins\">Gobelins</h1>\n<h1 data-heading=\"[[Esprits]]\" dir=\"auto\" id=\"esprits\">Esprits</h1>\n<h1 data-heading=\"[[Spectres]]\" dir=\"auto\" id=\"spectres\">Spectres</h1>\n<p dir=\"auto\">une âme libre non dangereuse dans cet état</p>\n<h1 data-heading=\"[[Dieux]]\" dir=\"auto\" id=\"dieux\"><a href=\"%%BASE%%/Bestiaire/Planaires/Dieux/Dieux\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Planaires/Dieux/Dieux\" data-wiki-fragment=\"\">Dieux</a></h1>\n<h1 data-heading=\"[[Possédés]]\" dir=\"auto\" id=\"possds\">Possédés</h1>\n<p dir=\"auto\">une âme possède un vivant et remplace son âme</p>\n<h1 data-heading=\"[[Ressuscités]]\" dir=\"auto\" id=\"ressuscits\">Ressuscités</h1>\n<p dir=\"auto\">une âme récupère son corps d'origine</p>\n<h1 data-heading=\"[[Liches]]\" dir=\"auto\" id=\"liches\">Liches</h1>\n<p dir=\"auto\">sorcier qui s'est séparé de son âme</p>\n<h1 data-heading=\"[[Vampires]]\" dir=\"auto\" id=\"vampires\">Vampires</h1>")}
  </div>
</article>

<LinkPreview />
