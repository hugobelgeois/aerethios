<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "bronze",
          "text": "Bronze",
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
      },
      {
          "id": "platine",
          "text": "Platine",
          "level": 2
      },
      {
          "id": "lgendes",
          "text": "Légendes",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Arvens"}</title>
  <meta name="description" content={"Bronze Niveau 1 à 3 = Poids morts La majorité des gens qui rejoignent les Arvens ne se rendent pas compte du danger qui les attend et meurent lors de leurs aventures. Argent Niveau 4 à 7 = Débutants…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Arvens"} />
  <meta property="og:description" content={"Bronze Niveau 1 à 3 = Poids morts La majorité des gens qui rejoignent les Arvens ne se rendent pas compte du danger qui les attend et meurent lors de leurs aventures. Argent Niveau 4 à 7 = Débutants…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Arvens"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h2 data-heading=\"Bronze\" dir=\"auto\" id=\"bronze\">Bronze</h2>\n<blockquote dir=\"auto\">\n<p>Niveau 1 à 3 = Poids morts</p>\n</blockquote>\n<p dir=\"auto\">La majorité des gens qui rejoignent les Arvens ne se rendent pas compte du danger qui les attend et meurent lors de leurs aventures.</p>\n<h2 data-heading=\"Argent\" dir=\"auto\" id=\"argent\">Argent</h2>\n<blockquote dir=\"auto\">\n<p>Niveau 4 à 7 = Débutants</p>\n</blockquote>\n<p dir=\"auto\">Ceux qui arrivent au rang argent on fait le plus dur et resteront sûrement encore en vie quelque temps.</p>\n<p dir=\"auto\">Il est donc intéressant pour les plus expérimentés de les épauler pour prendre la relève plus tard.</p>\n<h2 data-heading=\"Or\" dir=\"auto\" id=\"or\">Or</h2>\n<blockquote dir=\"auto\">\n<p>Niveau 8 à 12 = Aventuriers</p>\n</blockquote>\n<p dir=\"auto\">Les rangs or ont fait leur preuve et sont capables d'effectuer des quêtes sans l'aide de rangs supérieurs.</p>\n<h2 data-heading=\"Platine\" dir=\"auto\" id=\"platine\">Platine</h2>\n<blockquote dir=\"auto\">\n<p>Niveau 13 à 18 = Héros</p>\n</blockquote>\n<p dir=\"auto\">Les platines sont rares et réduisent le nombre d'aventures qu'ils font afin de conserver leurs forces pour les missions les plus dangereuses.</p>\n<p dir=\"auto\">Ils profitent de ce temps libre supplémentaire pour accompagner les rangs argents.</p>\n<h2 data-heading=\"Légendes\" dir=\"auto\" id=\"lgendes\">Légendes</h2>\n<blockquote dir=\"auto\">\n<p>Niveau 19 à 20 = Légendes<br>\nSe débloque selon le continent :</p>\n<ul>\n<li dir=\"auto\"><strong>Diamant</strong> (Ovliin),</li>\n<li dir=\"auto\"><strong>Emeraude</strong> (Nirina),</li>\n<li dir=\"auto\"><strong>Rubis</strong> (Kothula),</li>\n<li dir=\"auto\"><strong>Topaze</strong> (Suraja).</li>\n</ul>\n</blockquote>\n<p dir=\"auto\">Rares sont ceux qui possèdent ne serait-ce qu'un de ces titres</p>\n<p dir=\"auto\">Ils deviennent généralement des ambassadeurs de dirigeants, des chefs de guerre ou autre rôle empli de puissance.</p>"}
  </div>
</article>

<LinkPreview />
