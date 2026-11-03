<script lang="ts">
  import { applyBase } from "$lib/basePath";
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
    {@html "<p dir=\"auto\">Définit les créatures dont le sang est remplacé par de la sève (entre autre) et qui ne possèdent pas d'organes.</p>\n<h1 data-heading=\"Fixées\" dir=\"auto\" id=\"fixees\">Fixées</h1>\n<p dir=\"auto\">agissent lentement, ex. carnivores, lianes constricteurs</p>\n<h1 data-heading=\"Animées\" dir=\"auto\" id=\"animees\">Animées</h1>\n<p dir=\"auto\">formes animales ou humanoïdes, ex. homme-champignon, dryades</p>\n<h1 data-heading=\"Parasites\" dir=\"auto\" id=\"parasites\">Parasites</h1>"}
  </div>
</article>
