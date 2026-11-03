<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "gamesh-dieu-scintillant",
          "text": "[[Gamesh, Dieu Scintillant]]",
          "level": 2
      },
      {
          "id": "aerel-grande-mre",
          "text": "[[Aerel, Grande Mère]]",
          "level": 2
      },
      {
          "id": "radeon-dieu-dormant",
          "text": "[[Radeon, Dieu Dormant]]",
          "level": 2
      },
      {
          "id": "obel-dieu-affam",
          "text": "[[Obel, Dieu Affamé]]",
          "level": 2
      },
      {
          "id": "kira-dieu-pourpre",
          "text": "[[Kira, Dieu Pourpre]]",
          "level": 2
      },
      {
          "id": "imet-dieu-patient",
          "text": "[[Imet, Dieu Patient]]",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Dieux"}</title>
  <meta name="description" content={"Gamesh, Dieu Scintillant Dieu de la possession et du partage. Aerel, Grande Mère Déesse de la fertilité et du plaisir. Radeon, Dieu Dormant Dieu des rêves et des ambitions. Obel, Dieu Affamé Dieu…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Dieux"} />
  <meta property="og:description" content={"Gamesh, Dieu Scintillant Dieu de la possession et du partage. Aerel, Grande Mère Déesse de la fertilité et du plaisir. Radeon, Dieu Dormant Dieu des rêves et des ambitions. Obel, Dieu Affamé Dieu…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Dieux"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html applyBase("<h2 data-heading=\"[[Gamesh, Dieu Scintillant]]\" dir=\"auto\" id=\"gamesh-dieu-scintillant\">Gamesh, Dieu Scintillant</h2>\n<p dir=\"auto\">Dieu de la possession et du partage.<br>\n<span alt=\"dieu-scintillant.png\" src=\"dieu-scintillant.png\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"dieu-scintillant.png\" src=\"%%BASE%%/Images/dieu-scintillant.png\"></span></p>\n<h2 data-heading=\"[[Aerel, Grande Mère]]\" dir=\"auto\" id=\"aerel-grande-mre\">Aerel, Grande Mère</h2>\n<p dir=\"auto\">Déesse de la fertilité et du plaisir.<br>\n<span alt=\"grande-mère.png\" src=\"grande-mère.png\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"grande-mère.png\" src=\"%%BASE%%/Images/grande-m%C3%A8re.png\"></span></p>\n<h2 data-heading=\"[[Radeon, Dieu Dormant]]\" dir=\"auto\" id=\"radeon-dieu-dormant\">Radeon, Dieu Dormant</h2>\n<p dir=\"auto\">Dieu des rêves et des ambitions.<br>\n<span alt=\"dieu-dormant.png\" src=\"dieu-dormant.png\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"dieu-dormant.png\" src=\"%%BASE%%/Images/dieu-dormant.png\"></span><br>\n<span alt=\"dieu-dormant-2.png\" src=\"dieu-dormant-2.png\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"dieu-dormant-2.png\" src=\"%%BASE%%/Images/dieu-dormant-2.png\"></span></p>\n<h2 data-heading=\"[[Obel, Dieu Affamé]]\" dir=\"auto\" id=\"obel-dieu-affam\">Obel, Dieu Affamé</h2>\n<p dir=\"auto\">Dieu d'élévation et de grandeur</p>\n<h2 data-heading=\"[[Kira, Dieu Pourpre]]\" dir=\"auto\" id=\"kira-dieu-pourpre\">Kira, Dieu Pourpre</h2>\n<p dir=\"auto\">Dieu de la guerre et de l'amour.<br>\n<span alt=\"dieu-pourpre.png\" src=\"dieu-pourpre.png\" class=\"internal-embed media-embed image-embed is-loaded\"><img alt=\"dieu-pourpre.png\" src=\"%%BASE%%/Images/dieu-pourpre.png\"></span></p>\n<h2 data-heading=\"[[Imet, Dieu Patient]]\" dir=\"auto\" id=\"imet-dieu-patient\">Imet, Dieu Patient</h2>\n<p dir=\"auto\">Dieu de la vie et de la mort.</p>")}
  </div>
</article>

<LinkPreview />
