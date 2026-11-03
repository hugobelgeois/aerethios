<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "cuivre",
          "text": "Cuivre",
          "level": 2
      },
      {
          "id": "argent",
          "text": "Argent",
          "level": 2
      },
      {
          "id": "or",
          "text": "Or",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Economie"}</title>
  <meta name="description" content={"1 pièce d'or = 100 pièces d'argent = 10.000 pièces de cuivre 1 pièce d'électrum = 50 pièces d'argent 1 pièce de platine = 10 pièce d'or Cuivre Monnaie du paysan Achète à manger, des vêtements et des…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Economie"} />
  <meta property="og:description" content={"1 pièce d'or = 100 pièces d'argent = 10.000 pièces de cuivre 1 pièce d'électrum = 50 pièces d'argent 1 pièce de platine = 10 pièce d'or Cuivre Monnaie du paysan Achète à manger, des vêtements et des…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Economie"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<p dir=\"auto\">1 pièce d'or = 100 pièces d'argent = 10.000 pièces de cuivre</p>\n<p dir=\"auto\">1 pièce d'électrum = 50 pièces d'argent<br>\n1 pièce de platine = 10 pièce d'or</p>\n<h2 data-heading=\"Cuivre\" dir=\"auto\" id=\"cuivre\">Cuivre</h2>\n<blockquote dir=\"auto\">\n<p>Monnaie du paysan</p>\n</blockquote>\n<p dir=\"auto\">Achète à manger, des vêtements et des outils simples</p>\n<p dir=\"auto\">Un paysan moyen gagne 15/20 pc par jour</p>\n<p dir=\"auto\">Un fruit coûte 1-2 pc<br>\nUne bière coûte 4 pc<br>\nUn repas à l'auberge coûte 10 pc<br>\nUne nuit à l'auberge coûte 20 pc<br>\nUne tenue complète coûte 50 pc</p>\n<p dir=\"auto\">Les joueurs gagnent du cuivre comme récompenses de quêtes jusqu'au niveau 4-5 en moyenne</p>\n<h2 data-heading=\"Argent\" dir=\"auto\" id=\"argent\">Argent</h2>\n<blockquote dir=\"auto\">\n<p>Monnaie de l'aventurier et des artisans</p>\n</blockquote>\n<p dir=\"auto\">Achète de l'équipement, des potions et des meubles</p>\n<p dir=\"auto\">Les joueurs gagnent de l'argent comme récompenses de quêtes jusqu'au niveau 9-10 en moyenne</p>\n<h2 data-heading=\"Or\" dir=\"auto\" id=\"or\">Or</h2>\n<blockquote dir=\"auto\">\n<p>Monnaie des nobles</p>\n</blockquote>\n<p dir=\"auto\">Achète des bijoux, de la magie et des bâtiments</p>"}
  </div>
</article>

<LinkPreview />
