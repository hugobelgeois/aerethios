<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "humain",
          "text": "[[Humain]]",
          "level": 2
      },
      {
          "id": "nain",
          "text": "[[Nain]]",
          "level": 2
      },
      {
          "id": "elfe",
          "text": "[[Elfe]]",
          "level": 2
      },
      {
          "id": "orc",
          "text": "[[Orc]]",
          "level": 2
      },
      {
          "id": "calico",
          "text": "[[Calico]]",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Humanoïdes"}</title>
  <meta name="description" content={"Définit les entités se tenant debout dotées d'une intelligence sociale inter-espèce Humain Nain Elfe Orc Calico"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Humanoïdes"} />
  <meta property="og:description" content={"Définit les entités se tenant debout dotées d'une intelligence sociale inter-espèce Humain Nain Elfe Orc Calico"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Humanoïdes"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<blockquote dir=\"auto\">\n<p>Définit les entités se tenant debout dotées d'une intelligence sociale inter-espèce</p>\n</blockquote>\n<h2 data-heading=\"[[Humain]]\" dir=\"auto\" id=\"humain\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Humanoides/Humain\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Humanoides/Humain\" data-wiki-fragment=\"\">Humain</a></h2>\n<h2 data-heading=\"[[Nain]]\" dir=\"auto\" id=\"nain\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Humanoides/Nain\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Humanoides/Nain\" data-wiki-fragment=\"\">Nain</a></h2>\n<h2 data-heading=\"[[Elfe]]\" dir=\"auto\" id=\"elfe\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Humanoides/Elfe\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Humanoides/Elfe\" data-wiki-fragment=\"\">Elfe</a></h2>\n<h2 data-heading=\"[[Orc]]\" dir=\"auto\" id=\"orc\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Humanoides/Orc\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Humanoides/Orc\" data-wiki-fragment=\"\">Orc</a></h2>\n<h2 data-heading=\"[[Calico]]\" dir=\"auto\" id=\"calico\"><a href=\"%%BASE%%/Bestiaire/Terrestres/Humanoides/Calico\" class=\"internal-link\" data-wiki-href=\"/Bestiaire/Terrestres/Humanoides/Calico\" data-wiki-fragment=\"\">Calico</a></h2>")}
  </div>
</article>

<LinkPreview />
