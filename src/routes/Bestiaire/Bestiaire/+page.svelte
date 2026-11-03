<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "cratures-terrestres",
          "text": "Créatures Terrestres",
          "level": 1
      },
      {
          "id": "cratures-planaires",
          "text": "Créatures Planaires",
          "level": 1
      },
      {
          "id": "altrations",
          "text": "Altérations",
          "level": 1
      },
      {
          "id": "tailles",
          "text": "Tailles",
          "level": 1
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Bestiaire"}</title>
  <meta name="description" content={"Les créatures du monde se regroupent en différentes catégories. Un Arvens ou un Templis se doit de connaître les catégories qui le concernent s'il souhaite être efficace dans son domaine. Créatures…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Bestiaire"} />
  <meta property="og:description" content={"Les créatures du monde se regroupent en différentes catégories. Un Arvens ou un Templis se doit de connaître les catégories qui le concernent s'il souhaite être efficace dans son domaine. Créatures…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Bestiaire"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<blockquote dir=\"auto\">\n<p>Les créatures du monde se regroupent en différentes catégories.<br>\nUn Arvens ou un Templis se doit de connaître les catégories qui le concernent s'il souhaite être efficace dans son domaine.</p>\n</blockquote>\n<hr>\n<h1 data-heading=\"Créatures Terrestres\" dir=\"auto\" id=\"cratures-terrestres\">Créatures Terrestres</h1>\n<p dir=\"auto\">Entités combattues par les Arvens à l'aide de méthodes de combat conventionnelles.</p>\n<hr>\n<h1 data-heading=\"Créatures Planaires\" dir=\"auto\" id=\"cratures-planaires\">Créatures Planaires</h1>\n<p dir=\"auto\">Entités combattues par les Templis</p>\n<hr>\n<h1 data-heading=\"Altérations\" dir=\"auto\" id=\"altrations\">Altérations</h1>\n<ul>\n<li dir=\"auto\">Imbibé de magie (développe des abilités magiques posistives)</li>\n<li dir=\"auto\">Renforcé (les os sortent du corps pour faire un exo-squelette)</li>\n<li dir=\"auto\">Nécrosé de magie (comportement anormaux, régénération rapide, sorte de cancer)</li>\n<li dir=\"auto\">Parasité/ Symbioté</li>\n<li dir=\"auto\">Sacré </li>\n<li dir=\"auto\">Totémique (lié à un culte, sa force croît avec le nombre d’adorateurs ou de sacrifices)</li>\n<li dir=\"auto\">Cyclique (change d’apparence et de pouvoirs selon un cycle)</li>\n</ul>\n<hr>\n<h1 data-heading=\"Tailles\" dir=\"auto\" id=\"tailles\">Tailles</h1>\n<ul>\n<li dir=\"auto\">Minuscule (rat, chauve-souris, familier)</li>\n<li dir=\"auto\">Petit (chien, gobelin, loup)</li>\n<li dir=\"auto\">Normal (humain, orc, ogre jeune)</li>\n<li dir=\"auto\">Grand (ours, troll, wyverne)</li>\n<li dir=\"auto\">Énorme (hydre, éléphant, ogroides puissants)</li>\n<li dir=\"auto\">Titanesque (dragons anciens, colosses, avatars des dieux)</li>\n</ul>"}
  </div>
</article>

<LinkPreview />
