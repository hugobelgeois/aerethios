<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "nature",
          "text": "Nature",
          "level": 2
      },
      {
          "id": "socit",
          "text": "Société",
          "level": 2
      },
      {
          "id": "tribus",
          "text": "Tribus",
          "level": 2
      },
      {
          "id": "influence-animale",
          "text": "Influence animale",
          "level": 2
      },
      {
          "id": "religion",
          "text": "Religion",
          "level": 2
      },
      {
          "id": "particularits",
          "text": "Particularités",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Orc"}</title>
  <meta name="description" content={"Les Orcs naissent de l'union entre un Humain et un animal. Semblables aux humains, ils sont cependant généralement plus grands et plus musclés que ceux-ci. Ils conservent cependant certains traits de…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Orc"} />
  <meta property="og:description" content={"Les Orcs naissent de l'union entre un Humain et un animal. Semblables aux humains, ils sont cependant généralement plus grands et plus musclés que ceux-ci. Ils conservent cependant certains traits de…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Orc"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<p dir=\"auto\">Les Orcs naissent de l'union entre un Humain et un animal.</p>\n<p dir=\"auto\">Semblables aux humains, ils sont cependant généralement plus grands et plus musclés que ceux-ci.<br>\nIls conservent cependant certains traits de leur parent animal, et la couleur de leur peau tire généralement sur le vert, le brun ou le gris.</p>\n<h2 data-heading=\"Nature\" dir=\"auto\" id=\"nature\">Nature</h2>\n<p dir=\"auto\">Les Orcs sont guidés par un instinct particulier qui les pousse naturellement vers les Humains.</p>\n<p dir=\"auto\">Ils perçoivent inconsciemment chez eux une forme d'autorité naturelle, souvent décrite comme une aura de domination.</p>\n<p dir=\"auto\">Cette fascination est purement biologique et ne dépend d'aucune religion.</p>\n<h2 data-heading=\"Société\" dir=\"auto\" id=\"socit\">Société</h2>\n<p dir=\"auto\">Les Orcs respectent profondément les Humains.</p>\n<p dir=\"auto\">Ils ne leur obéissent pas systématiquement, mais cherchent généralement leur approbation et évitent de leur nuire.</p>\n<p dir=\"auto\">Un Orc n'attaquera presque jamais un Humain sans provocation préalable.</p>\n<h2 data-heading=\"Tribus\" dir=\"auto\" id=\"tribus\">Tribus</h2>\n<p dir=\"auto\">Lorsqu'aucun Humain n'est présent, les Orcs se regroupent en tribus composées d'individus partageant le même héritage animal.</p>\n<p dir=\"auto\">Les relations entre tribus sont souvent marquées par la compétition, l'agressivité et les conflits territoriaux.</p>\n<h2 data-heading=\"Influence animale\" dir=\"auto\" id=\"influence-animale\">Influence animale</h2>\n<p dir=\"auto\">L'animal dont l'Orc descend influence fortement :</p>\n<ul>\n<li dir=\"auto\">son tempérament ;</li>\n<li dir=\"auto\">ses instincts ;</li>\n<li dir=\"auto\">ses aptitudes physiques.</li>\n</ul>\n<p dir=\"auto\">Quelques exemples :</p>\n<ul>\n<li dir=\"auto\">Orc-ours : force et endurance.</li>\n<li dir=\"auto\">Orc-loup : esprit de groupe et coordination.</li>\n<li dir=\"auto\">Orc-sanglier : agressivité et résistance.</li>\n</ul>\n<h2 data-heading=\"Religion\" dir=\"auto\" id=\"religion\">Religion</h2>\n<p dir=\"auto\">Les Orcs accordent peu d'importance aux dieux.</p>\n<p dir=\"auto\">Pour beaucoup d'entre eux, les Humains occupent déjà une place suffisamment proche du divin pour rendre le reste secondaire.</p>\n<h2 data-heading=\"Particularités\" dir=\"auto\" id=\"particularits\">Particularités</h2>\n<ul>\n<li dir=\"auto\">Hybrides entre humains et animaux.</li>\n<li dir=\"auto\">Respect instinctif envers l'humanité.</li>\n<li dir=\"auto\">Organisation tribale.</li>\n<li dir=\"auto\">Capacités influencées par leur héritage animal.</li>\n</ul>"}
  </div>
</article>

<LinkPreview />
