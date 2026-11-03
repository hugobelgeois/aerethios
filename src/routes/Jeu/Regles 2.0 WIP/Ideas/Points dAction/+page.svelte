<script lang="ts">
  import { onDestroy } from "svelte";
  import { tocHeadings } from "$lib/stores";
  import { applyBase } from "$lib/basePath";
  import LinkPreview from "$lib/LinkPreview.svelte";

  tocHeadings.set([
      {
          "id": "actions",
          "text": "Actions",
          "level": 1
      },
      {
          "id": "mouvement",
          "text": "Mouvement",
          "level": 2
      },
      {
          "id": "action",
          "text": "Action",
          "level": 2
      },
      {
          "id": "action-bonus",
          "text": "Action Bonus",
          "level": 2
      },
      {
          "id": "raction",
          "text": "Réaction",
          "level": 2
      }
  ]);

  onDestroy(() => tocHeadings.set([]));
</script>

<svelte:head>
  <title>{"Points d'Action"}</title>
  <meta name="description" content={"Actions Les joueurs possèdent des Points d'Action (PA). PA = 3 par défaut +1 tous les 5 niveaux ? (5, 10, 15, 20) -> Max 7 Les PA s'utilisent pendant le tour du joueur (Mouvement, Action, Action…"} />
  <meta property="og:type" content={"article"} />
  <meta property="og:title" content={"Points d'Action"} />
  <meta property="og:description" content={"Actions Les joueurs possèdent des Points d'Action (PA). PA = 3 par défaut +1 tous les 5 niveaux ? (5, 10, 15, 20) -> Max 7 Les PA s'utilisent pendant le tour du joueur (Mouvement, Action, Action…"} />
  <meta property="og:site_name" content={"Aerethios"} />
  <meta name="twitter:card" content={"summary"} />
</svelte:head>

<article class="md-page">
  <header class="md-header">
    <h1>{"Points d'Action"}</h1>
  </header>
  <div class="markdown-rendered">
    {@html "<h1 data-heading=\"Actions\" dir=\"auto\" id=\"actions\">Actions</h1>\n<p dir=\"auto\">Les joueurs possèdent des Points d'Action (PA).</p>\n<blockquote dir=\"auto\">\n<p>PA = 3 par défaut<br>\n+1 tous les 5 niveaux ? (5, 10, 15, 20) -&gt; Max 7</p>\n</blockquote>\n<p dir=\"auto\">Les PA s'utilisent pendant le tour du joueur (Mouvement, Action, Action Bonus), mais également pendant le tour des ennemis (Réaction).<br>\nIls se remplissent à chaque début de tour du joueur.<br>\nTout coûte 1 PA de base sauf précision.<br>\nPasser son tour à se concentrer permet d'avoir 1PA bonus au tour suivant</p>\n<h2 data-heading=\"Mouvement\" dir=\"auto\" id=\"mouvement\">Mouvement</h2>\n<p dir=\"auto\">Peu importe la distance (en restant dans les limites de déplacement), le déplacement coûte 1PA.</p>\n<h2 data-heading=\"Action\" dir=\"auto\" id=\"action\">Action</h2>\n<p dir=\"auto\">Les attaques physiques coûtent 1 PA.<br>\nPeu importe le nombre de crystaux utilisés, les attaques magiques coûtent 1 PA.</p>\n<h2 data-heading=\"Action Bonus\" dir=\"auto\" id=\"action-bonus\">Action Bonus</h2>\n<p dir=\"auto\">Le joueur ne peut plus faire d'Actions normales une fois qu'une Action Bonus a été faite.</p>\n<h2 data-heading=\"Réaction\" dir=\"auto\" id=\"raction\">Réaction</h2>\n<p dir=\"auto\">Esquiver : Pour chaque PA qu'il n'a pas dépensé, le joueur peut ajouter son modificateur de Dextérité à la mobilité de son armure afin d'avoir son Esquive.<br>\nS'il a 3 PA non dépensé et qu'une attaque contre lui ne requiert que 2PA pour que son esquive soit supérieure à l'attaque, il peut en consommer seulement 2</p>"}
  </div>
</article>

<LinkPreview />
